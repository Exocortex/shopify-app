import gql from "graphql-tag";
import { Query, ApolloConsumer } from "react-apollo";
import { Card, ResourceList, Stack, Thumbnail, Frame } from "@shopify/polaris";
import store from "store-js";
import ThreekitForm from "./ThreekitForm";
import { Redirect } from "@shopify/app-bridge/actions";
import { Context } from "@shopify/app-bridge-react";
import { LoadingScreen } from "../components/Loading";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: '/graphql', fetch: fetch });

const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

const GET_TK_PRODUCT_IDS = gql`
  query {
    shop {
      metafield(namespace: "threekit", key: "items") {
        id
        value
      }
    }
  }
`;

const GET_TK_ASSET_ID = gql`
  query($id: ID!) {
    product(id: $id) {
      metafield(namespace: "threekit", key: "assetid") {
        value
        id
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

class ResourceListWithProducts extends React.Component {
  state = {
    ids: [],
    tkId: {},
    field: "",
    active: false,
    checked: false,
    tkMetaFieldId: "",
  };

  _queryMe = (data) => {
    if (data.shop.metafield == null) {
      return null;
    } else {
      const str = JSON.parse(data.shop.metafield.value);
      let arr;
      arr = str.ids.split(",");

      this.setState({
        ids: arr.map((id) => "gid://shopify/Product/" + id),
      });
    }
  };

  _setTkID = (data) => {
    this.setState({
      tkId: data,
    });
  };

  _setTkMetafieldId = (data) => {
    this.setState({
      tkMetaFieldId: JSON.stringify(data),
    });
  };

  getTkAsset = () => {
    return (
      <Query
        query={GET_TK_ASSET_ID}
        onCompleted={(data) => this._setTkID(data)}
      >
        {() => {
          return null;
        }}
      </Query>
    );
  };

  handleTKChange = (e) => {
    this.setState({
      field: e,
    });
  };

  handleCheck = () => {
    !this.state.checked
      ? this.setState({ checked: true })
      : this.setState({ checked: false });
  };

  handleToggle = () =>
    !this.state.active
      ? this.setState({ active: true })
      : this.setState({ active: false });

  static contextType = Context;
  render() {
    const app = this.context;
    const redirectToProduct = () => {
      const redirect = Redirect.create(app);
      redirect.dispatch(Redirect.Action.APP, "/edit-products");
    };

    return (
      <div>
        <Frame>
          <Query
            query={GET_TK_PRODUCT_IDS}
            onCompleted={(data) => this._queryMe(data)}
          >
            {() => {
              return <div>{""}</div>;
            }}
          </Query>{" "}
          <Query
            query={GET_META_ID}
            onCompleted={(data) => this._setTkMetafieldId(data)}
          >
            {() => {
              return <div>{""}</div>;
            }}
          </Query>{" "}
          <Query
            query={GET_PRODUCTS_BY_ID}
            variables={{ ids: store.get("ids") }}
          >
            {({ data, loading, error }) => {
              if (loading) return <LoadingScreen />;
              if (error) return <div>{error.message}</div>;

              return (
                <Card>
                  <ResourceList
                    showHeader
                    resourceName={{
                      singular: "Product",
                      plural: "Products",
                    }}
                    items={data.nodes}
                    renderItem={(item) => {
                      const media = (
                        <Thumbnail
                          source={
                            item.images.edges[0]
                              ? item.images.edges[0].node.originalSrc
                              : ""
                          }
                          alt={
                            item.images.edges[0]
                              ? item.images.edges[0].node.altText
                              : ""
                          }
                        />
                      );
                      const price = item.variants.edges[0].node.price;
                      return (
                        <ResourceList.Item
                          id={item.id}
                          media={media}
                          accessibilityLabel={`View details for ${item.title}`}
                        >
                          <Stack>
                            <Stack.Item fill>
                              <ThreekitForm
                                query={GET_TK_ASSET_ID}
                                title={item.title}
                                id={{ id: item.id }}
                                field={this.state.field}
                                handleTKChange={this.handleTKChange}
                                handleCheckChange={this.handleCheck}
                                checked={this.state.checked}
                                tkMetafieldId={this.state.tkMetaFieldId}
                              />
                            </Stack.Item>
                          </Stack>
                        </ResourceList.Item>
                      );
                    }}
                  />
                </Card>
              );
            }}
          </Query>
        </Frame>
      </div>
    );
  }
}

export default ResourceListWithProducts;
