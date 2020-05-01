import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card, ResourceList, Stack, Thumbnail, Frame } from "@shopify/polaris";
import store from "store-js";
import ThreekitForm from "./ThreekitForm";
import { Context } from "@shopify/app-bridge-react";
import { LoadingScreen } from "../components/Loading";


const GET_ALL_PRODCUTS = gql`
query {
  products(first: 50) {
    edges {
      cursor
      node {
        id
        title
        handle
        descriptionHtml
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`

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


class AllProductResource extends React.Component {
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
 

    return (
      <div style={{margin: 'auto', width: '95%'}}>
        <Frame>


          <Query
            query={GET_ALL_PRODCUTS}
          >
            {({ data, loading, error }) => {
              if (loading) return <LoadingScreen />;
              if (error) return <div>{error.message}</div>;
              console.log(data)

              return (
                <Card >
                  <ResourceList
                    showHeader
                    resourceName={{
                      singular: "Product",
                      plural: "Products",
                    }}
                    items={data.products.edges}
                    renderItem={(item) => {
                      const media = (
                        <Thumbnail
                          source={
                            item.node.images.edges[0]
                              ? item.node.images.edges[0].node.originalSrc
                              : ""
                          }
                          alt={
                            item.node.images.edges[0]
                              ? item.node.images.edges[0].node.altText
                              : ""
                          }
                        />
                      );
                    //   const price = item.variants.edges[0].node.price;
                      return (
                        <ResourceList.Item
                          id={item.node.id}
                          media={media}
                          accessibilityLabel={`View details for ${item.node.title}`}
                        >
                          <Stack>
                            <Stack.Item fill>
                              <ThreekitForm
                                query={GET_TK_ASSET_ID}
                                title={item.node.title}
                                id={{ id: item.node.id }}
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

export default AllProductResource;
