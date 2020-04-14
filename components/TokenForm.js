import React, { useState, useCallback, useEffect } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { TextField, Button, Toast, Frame } from "@shopify/polaris";
import { LoadingText } from "../components/Loading";

function TokenForm(props) {
  const [tkToken, setTkToken] = useState("No Threekit ID");
  const [isSaved, setIsSaved] = useState(false);

  const makeShopMetafield = val => {
    var fetchUrl = "/api/makeMeta/" + val;
    var method = "GET";

    fetch(fetchUrl, { method: method })
      .then(response => response.json())
      .then(json => {
        setTkToken(json.data.metafield.value);
        setIsSaved(true);
      });
  };

  const updateShopMetafield = (id, val) => {
    var fetchUrl = `/api/insertMeta/${id}/${val}`;
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then(response => response.json())
      .then(json => {
        setTkToken(json.data.metafield.value);
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

  const handleChange = useCallback(newValue => setTkToken(newValue), []);
  return (
    <div>
      {!isSaved ? (
        <div></div>
      ) : (
        <Frame>
          <Toast content="Saved" onDismiss={() => setIsSaved(false)}></Toast>
        </Frame>
      )}
      <Query
        query={GET_TK_TOKEN}
        onCompleted={data => setTkToken(data)}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <LoadingText/>;
          if (error) return `Error! ${error}`;

          return (
            <TextField
              label={"Threekit Token"}
              value={tkToken}
              onChange={handleChange}
              placeholder={
                !data.shop.metafield
                  ? "No Threekit Token"
                  : data.shop.metafield.value
              }
              connectedRight={
                <div>
                  <Button
                    primary
                    onClick={() =>
                      !data.shop.metafield
                        ? makeShopMetafield(tkToken)
                        : updateShopMetafield(
                            data.shop.metafield.id.split("Metafield/")[1],
                            tkToken
                          )
                    }
                  >
                    Save
                  </Button>
                </div>
              }
            ></TextField>
          );
        }}
      </Query>
    </div>
  );
}

export default TokenForm;
