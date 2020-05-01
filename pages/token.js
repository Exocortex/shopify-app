import React, { useState, useCallback, useEffect } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {
  TextField,
  Button,
  Toast,
  Frame,
  Form,
  TextStyle,
  TextContainer,
  Heading,
  Card,
} from "@shopify/polaris";
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
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return (
    <div style={{ margin: "30px" }}>
      {!isSaved ? (
        <div></div>
      ) : (
        <Frame>
          <Toast content="Saved" onDismiss={() => setIsSaved(false)}></Toast>
        </Frame>
      )}
      <Query
        query={GET_TK_TOKEN}
        onCompleted={(data) =>
          setTkToken(
            data.shop.metafield
              ? data.shop.metafield.value
              : "No Threekit Token"
          )
        }
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <LoadingText />;
          if (error) return `Error! ${error}`;
          console.log(tkToken);
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
              {/* <div style={{ backgroundColor: "#ffffff", padding: "20px" }}> */}
              <Card title="Authentication" sectioned>
       
                  Please enter your Threekit token to authorize the Shopify
                  Connector. If you have any questions or would like to see
                  documentation, please navigate to the help page.{" "}<br/>
    
  
                <TextContainer>
                  {/* <Heading>Your Current Threekit Token:</Heading> */}
                  <TextStyle variation="strong">
                    Your current Threekit token: <br/>
                  </TextStyle>
                  <TextStyle variation="subdued">
                    {data.shop.metafield ? tkToken : tkToken}
                  </TextStyle>
                </TextContainer>
                {/* </div> */}
                <Card.Section>
                  <TextField
                    label={"Update Token"}
                    value={tkToken}
                    minLength={5}
                    onChange={handleChange}
                    connectedRight={
                      <div>
                        <Button
                          primary
                          onClick={() => {
                            submitForm(), forceUpdate();
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    }
                  ></TextField>
                </Card.Section>
              </Card>
            </Form>
          );
        }}
      </Query>
    </div>
  );
}

export default TokenForm;
