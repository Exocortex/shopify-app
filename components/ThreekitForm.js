import React, { useState, useCallback, useEffect } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
  Banner,
  Form,
  FormLayout,
  Layout,
  TextField,
  Stack,
  TextStyle,
  Checkbox,
  Button,
  Toast,
} from "@shopify/polaris";
import { LoadingText } from "../components/Loading";
import SnippetGen from "../components/SnippetGen";

function ThreekitForm(props) {
  // Declare a new state variable, which we'll call "count"
  const [value, setValue] = useState("");
  const [tkMetaId, setTkMetaId] = useState();
  const [isSaved, setIsSaved] = useState(false);

  const [isPdp, setIsPdp] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const [isAr, setIsAr] = useState({});
  const [arChecked, setArChecked] = useState(false);

  const [modalActive, setModalActive] = useState(false);
  const handleModalChange = useCallback(() => setModalActive(!modalActive), [
    modalActive,
  ]);

  const UPDATE_TK_ID = gql`
    mutation($input: ProductInput!) {
      productUpdate(input: $input) {
        product {
          metafields(first: 100) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
      }
    }
  `;

  const GET_META_ID = gql`
    query($id: ID!) {
      product(id: $id) {
        metafield(namespace: "threekit", key: "assetid") {
          value
          id
        }
      }
    }
  `;

  const IS_PLAYER_PDP = gql`
    query($id: ID!) {
      product(id: $id) {
        metafield(namespace: "threekit", key: "pdp") {
          value
          id
        }
      }
    }
  `;

  const IS_AR_ENABLED = gql`
    query($id: ID!) {
      product(id: $id) {
        metafield(namespace: "threekit", key: "ARen") {
          value
          id
        }
      }
    }
  `;

  const UPDATE_TK_ATTR = gql`
    mutation($input: ProductInput!) {
      productUpdate(input: $input) {
        product {
          metafields(first: 100) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
      }
    }
  `;

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const setCheck = (val) => setIsChecked(val);
  const setArCheck = (val) => setArChecked(val);

  const updateMeta = (data, bool, namespace, key, obj, action) => {
    let productVariableInput;
    if (!data.product.metafield) {
      bool
        ? (productVariableInput = {
            id: props.id.id,
            metafields: [
              {
                namespace: namespace,
                key: key,
                value: "false",
                type: "STRING",
              },
            ],
          })
        : (productVariableInput = {
            id: props.id.id,
            metafields: [
              {
                namespace: namespace,
                key: key,
                value: "true",
                type: "STRING",
              },
            ],
          });
    } else {
      bool
        ? (productVariableInput = {
            id: props.id.id,
            metafields: [
              {
                namespace: namespace,
                key: key,
                value: "false",
                type: "STRING",
                id: obj.product.metafield.id,
              },
            ],
          })
        : (productVariableInput = {
            id: props.id.id,
            metafields: [
              {
                namespace: namespace,
                key: key,
                value: "true",
                type: "STRING",
                id: obj.product.metafield.id,
              },
            ],
          });
    }

    action({
      variables: {
        input: productVariableInput,
      },
    });
  };
  return (
    <div>
      <Stack distribution="fill">
        <Form>
          <FormLayout>
            <Query query={props.query} variables={props.id}>
              {({ loading, error, data, refetch }) => {
                if (loading) return <LoadingText />;
                if (error) return `Error! ${error}`;

                return (
                  <div>
                    <Query
                      query={GET_META_ID}
                      variables={props.id}
                      onCompleted={(data) => setTkMetaId(data)}
                    >
                      {({ loading, error, data, refetch }) => {
                        if (loading) return null;
                        if (error) return `Error! ${error}`;
                        
                        return null;
                      }}
                    </Query>

                    <Stack.Item>
                      <h3>
                        <TextStyle variation="strong">{props.title}</TextStyle>
                      </h3>
                    </Stack.Item>

                    <Stack.Item>
                      <Mutation
                        mutation={UPDATE_TK_ID}
                        onCompleted={() => setIsSaved(true)}
                      >
                        {(handleSubmit, { err, res }) => {
                          const showError = err && (
                            <Banner status="critical">{err.message}</Banner>
                          );

                          return (
                            <div>
                              {!isSaved ? (
                                <div></div>
                              ) : (
                                <Toast
                                  content="Saved"
                                  onDismiss={() => setIsSaved(false)}
                                ></Toast>
                              )}

                              <Layout.Section>{showError}</Layout.Section>

                              <TextField
                                value={value}
                                onFocus={() =>
                                  setValue(
                                    !data.product.metafield
                                      ? "No Threekit ID"
                                      : data.product.metafield.value
                                  )
                                }
                                onChange={handleChange}
                                id={data.product.id}
                                ariaControls={data.product.id}
                                placeholder={
                                  !data.product.metafield
                                    ? "No Threekit ID"
                                    : data.product.metafield.value
                                }
                                connectedRight={
                                  <div>
                                    {/* <SnippetGen
                                      handleChange={handleModalChange}
                                      active={modalActive}
                                      title={`${props.title}`}
                                      assetid={
                                        !data.product.metafield
                                          ? "No Threekit ID"
                                          : data.product.metafield.value
                                      }
                                      ar={"true"}
                                      env={"preview"}
                                    /> */}
                                    <Button
                                      primary
                                      onClick={() => {
                                        let productVariableInput;
                                        if (!data.product.metafield) {
                                          productVariableInput = {
                                            id: props.id.id,
                                            metafields: [
                                              {
                                                namespace: "threekit",
                                                key: "assetid",
                                                value: value,
                                                type: "STRING",
                                              },
                                            ],
                                          };
                                        } else {
                                          productVariableInput = {
                                            id: props.id.id,
                                            metafields: [
                                              {
                                                namespace: "threekit",
                                                key: "assetid",
                                                value: value,
                                                type: "STRING",
                                                id:
                                                  tkMetaId.product.metafield.id,
                                              },
                                            ],
                                          };
                                        }

                                        handleSubmit({
                                          variables: {
                                            input: productVariableInput,
                                          },
                                        });
                                      }}
                                    >
                                      Save
                                    </Button>
                                    {/* <Button onClick={handleModalChange}>
                                      Embed this product
                                    </Button> */}
                                  </div>
                                }
                              ></TextField>
                            </div>
                          );
                        }}
                      </Mutation>
                    </Stack.Item>
                  </div>
                );
              }}
            </Query>

            <Stack.Item>
              <Query
                query={IS_PLAYER_PDP}
                variables={props.id}
                onCompleted={(data) => setIsPdp(data)}
              >
                {({ loading, error, data, refetch }) => {
                  if (loading) return <LoadingText />;
                  if (error) return `Error! ${error}`;
                  return (
                    <Mutation
                      mutation={UPDATE_TK_ATTR}
                      onCompleted={() => setIsSaved(true)}
                    >
                      {(handleSubmit, { err, res }) => {
                        const showError = err && (
                          <Banner status="critical">{err.message}</Banner>
                        );
                        if (
                          !data.product.metafield ||
                          data.product.metafield.value == "false"
                        ) {
                          useEffect(() => {
                            setIsChecked(false);
                          }, [setIsChecked]);
                        } else {
                          useEffect(() => {
                            setIsChecked(true);
                          }, [setIsChecked]);
                        }

                        return (
                          <div>
                            <p>
                              PDP Controls
                            </p>
                            <Checkbox
                              label="Display on PDP"
                              checked={isChecked}
                              onChange={() =>
                                updateMeta(
                                  data,
                                  isChecked,
                                  "threekit",
                                  "pdp",
                                  isPdp,
                                  handleSubmit
                                )
                              }
                              onFocus={() =>
                                isChecked ? setCheck(false) : setCheck(true)
                              }
                            />
                          </div>
                        );
                      }}
                    </Mutation>
                  );
                }}
              </Query>
            </Stack.Item>
            <Stack.Item>
              <Query
                query={IS_AR_ENABLED}
                variables={props.id}
                onCompleted={(data) => setIsAr(data)}
              >
                {({ loading, error, data, refetch }) => {
                  if (loading) return <LoadingText />;
                  if (error) return `Error! ${error}`;
                  return (
                    <Mutation
                      mutation={UPDATE_TK_ATTR}
                      onCompleted={() => setIsSaved(true)}
                    >
                      {(handleArSubmit, { err, res }) => {
                        const showError = err && (
                          <Banner status="critical">{err.message}</Banner>
                        );
                        if (
                          !data.product.metafield ||
                          data.product.metafield.value == "false"
                        ) {
                          useEffect(() => {
                            setArChecked(false);
                          }, [setArChecked]);
                        } else {
                          useEffect(() => {
                            setArChecked(true);
                          }, [setArChecked]);
                        }

                        return (
                          <div>
                            <Checkbox
                              label="AR Enabled"
                              checked={arChecked}
                              onChange={() =>
                                updateMeta(
                                  data,
                                  arChecked,
                                  "threekit",
                                  "ARen",
                                  isAr,
                                  handleArSubmit
                                )
                              }
                              onFocus={() =>
                                arChecked ? setArCheck(false) : setArCheck(true)
                              }
                            />
                          </div>
                        );
                      }}
                    </Mutation>
                  );
                }}
              </Query>
            </Stack.Item>
          </FormLayout>
        </Form>
      </Stack>
    </div>
  );
}

export default ThreekitForm;
