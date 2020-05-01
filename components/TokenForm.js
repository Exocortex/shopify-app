import React, { useState, useCallback, useEffect } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { TextField, Button, Toast, Frame, Form } from "@shopify/polaris";
import { LoadingText } from "../components/Loading";
import fetch from "node-fetch";

function TokenForm(props) {
  const [tkToken, setTkToken] = useState("No Threekit ID");
  const [isSaved, setIsSaved] = useState(false);

  const makeShopMetafield = (val) => {
    var fetchUrl = "/api/makeMeta/" + val;
    var method = "GET";

    fetch(fetchUrl, { method: method })
      .then((response) => response.json())
      .then((json) => {
        setTkToken(json.data.metafield.value.replace(`'`, ""));
        setIsSaved(true);
      });
  };

  const updateShopMetafield = (id, val) => {
    var fetchUrl = `/api/insertMeta/${id}/${val}`;
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then((response) => response.json())
      .then((json) => {
        setTkToken(json.data.metafield.value.replace(`'`, ""));
        setIsSaved(true);
      });
  };

  const GET_TK_TOKEN = gql`
    query {
      shop {
        metafield(namespace: "threekit", key: "token") {
          id
          value
        }
      }
    }
  `;

  const handleChange = useCallback((newValue) => setTkToken(newValue), []);
  return (
    <div style={{ margin: "30px" }}>
      {!isSaved ? (
        <div></div>
      ) : (
        <Frame>
          <Toast content="Saved" onDismiss={() => setIsSaved(false)}></Toast>
        </Frame>
      )}
      <Query query={GET_TK_TOKEN} onCompleted={(data) => setTkToken(data)}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <LoadingText />;
          if (error) return `Error! ${error}`;

          const submitForm = () => {
            !data.shop.metafield
              ? makeShopMetafield(tkToken)
              : updateShopMetafield(
                  data.shop.metafield.id.split("Metafield/")[1],
                  tkToken
                );
          };
          return (
            <Form>
              <TextField
                label={"Threekit Token"}
                value={tkToken}
                minLength={5}
                onChange={handleChange}
                placeholder={
                  !data.shop.metafield
                    ? "No Threekit Token"
                    : JSON.stringify(data.shop.metafield.value)
                }
                connectedRight={
                  <div>
                    <Button primary onClick={submitForm}>
                      Save
                    </Button>
                  </div>
                }
              ></TextField>
            </Form>
          );
        }}
      </Query>
    </div>
  );
}

export default TokenForm;
