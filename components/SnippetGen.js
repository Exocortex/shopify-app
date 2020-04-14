import React, { useState, useEffect } from "react";
import {
  TextContainer,
  TextField,
  Modal,
} from "@shopify/polaris";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

function SnippetGen(props) {
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

  const createSnippet = function (token) {
    let newTitle = props.title.replace(/\s/g, "");
    <Query
      query={GET_TK_TOKEN}
      onCompleted={(data) =>
        setValue(
          createSnippet(
            !data.shop.metafield ? "no token" : data.shop.metafield.value
          )
        )
      }
    >
      {({ loading, error, data, refetch }) => {
        if (loading) return null;
        if (error) return `Error! ${error}`;

        return (
          <Modal
            open={props.active}
            onClose={props.handleChange}
            title={props.title}
            primaryAction={{
              content: "Close",
              onAction: props.handleChange,
            }}
          >
            <Modal.Section>
              <TextContainer>
                <p>
                  Copy and paste the HTML to embed a Threekit player with the
                  selected product. Use it on blog posts, home pages, or
                  anywhere HTML input is supported.
                </p>
              </TextContainer>
            </Modal.Section>
            <Modal.Section>
              <TextContainer>
                <TextField multiline value={value} />
              </TextContainer>
            </Modal.Section>
          </Modal>
        );
      }}
    </Query>;
    return `<div id="tkplayer-${newTitle}" style="height: 500px; width: 500px;">
        <script>
                window.threekitPlayer({
                authToken: "${token}",
                el: document.getElementById("tkplayer-${newTitle}"),
                assetId: '${props.assetid}',
                showConfigurator: false,
                showAR: ${props.ar}
              })
              .then(async api => {
                 window.player = api;
                 window.configurator = await api.getConfigurator();
          });
        </script>`;
  };
  const [value, setValue] = useState("");


  return (
    <div>
      <Query
        query={GET_TK_TOKEN}
        onCompleted={(data) =>
          setValue(
            createSnippet(
              !data.shop.metafield ? "no token" : data.shop.metafield.value
            )
          )
        }
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return null;
          if (error) return `Error! ${error}`;

          return (
            <Modal
              open={props.active}
              onClose={props.handleChange}
              title={props.title}
              primaryAction={{
                content: "Close",
                onAction: props.handleChange,
              }}
              
            >
              <Modal.Section>
                <TextContainer>
                  <p>
                    Copy and paste the HTML to embed a Threekit player with the
                    selected product. Use it on blog posts, home pages, or
                    anywhere HTML input is supported.
                  </p>
                </TextContainer>
              </Modal.Section>
              <Modal.Section>
                <TextContainer>
                  <TextField multiline value={value} id="textBox" />
                </TextContainer>
              </Modal.Section>
            </Modal>
          );
        }}
      </Query>
    </div>
  );
}

export default SnippetGen;
