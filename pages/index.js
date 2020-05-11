import {
  Layout,
  Page,
  Card,
  TextStyle,
  EmptyState,
  Button,
  Heading,
  Subheading,
  TextContainer
} from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";
import AllProductResource from "../components/AllProductResource";
import TokenForm from "../components/TokenForm";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import fetch from "node-fetch";

// Get the shop's threekit metafield
const GET_TK_METAFIELD = gql`
  query {
    shop {
      metafield(namespace: "threekit", key: "token") {
        id
        value
      }
    }
  }
`;

class Index extends React.Component {
  state = {
    open: false,
    hasSrc: false,
    shop: "",
    tkMetaId: {},
    metaID: "",
  };

  _queryMe = (data) => {
    if (data.shop.metafield == null) {
      return null;
    } else {
      this.setState({
        tkMetaId: data,
        metaID: data.shop.metafield.id.split("Metafield/")[1],
      });
    }
  };

  _checkIfTK = () => {
    if (this.state.tkMetaId.shop.metafield == null) {
      console.log("no TK id");
    } else {
      console.log("Yes this is TK");
    }
  };

  _formatProductID = (arr) => {
    arr.map((x) => x.split("Product/")[1]);
  };

  // For testing
  getShopMetafield = () => {
    var fetchUrl = "/api/shopMeta";
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then((response) => response.json())
      .then((json) => {
        return json.data;
      });
  };

  updateShopMetafield = (id, val) => {
    var fetchUrl = `/api/insertMeta/${id}/${val}`;
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then((response) => response.json())
      .then((json) => {
        return json.data;
      });
  };

  makeScript = () => {
    var fetchUrl = `/make/script_tags`;
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then((response) => response.json())
      .then((json) => {
        return json.data;
      });
  };

  makeShopMetafield = (val) => {
    var fetchUrl;
    if (val == "undefined") {
      fetchUrl = "/api/makeMeta/";
    } else {
      fetchUrl = "/api/makeMeta/" + val;
    }
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then((response) => response.json())
      .then((json) => {});
  };

  componentDidMount() {
    // console.log(this.state)
    store.remove("ids");
    console.log(store.get("ids"));
    store.each(function (value, key) {
      console.log(key, "==", value);
    });
  }

  componentWillUnmount() {
    store.remove("ids");
  }

  render() {
    const emptyState = !store.get("ids");

    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: "Narrow Product List",
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <div>
          
          <div style={{marginBottom: "30px"}}>
          <Card title="Welcome to Threekit's Shopify Connector." sectioned >
          <TextContainer>
            {/* <Heading></Heading> */}
          <TextStyle variation="subdued">
            All of your Shopify products are listed below unless you have selected otherwise. To
            manage individual or several products, please narrow your product list.{" "}
          </TextStyle><br/>
          <TextStyle variation="negative">If you do not see a 3D player on your product page, please visit the <a href="/help">help</a> page to troubleshoot.</TextStyle>
          </TextContainer>
          </Card>
          </div>
   
       

          {/* <TokenForm /> */}
        </div>
        {emptyState ? (
          <Layout>
            <AllProductResource />
          </Layout>
        ) : (
          <div>
            <Query
              query={GET_TK_METAFIELD}
              onCompleted={(data) => this._queryMe(data)}
            >
              {() => {
                return <div>{""}</div>;
              }}
            </Query>
            <ResourceListWithProducts />
          </div>
        )}
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    console.log(resources.selection.map((product) => product.id));

    this.setState({ open: false });
    store.set("ids", idsFromResources);
  };
}
export default Index;
