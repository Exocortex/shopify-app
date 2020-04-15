import { Layout, Page, TextStyle, EmptyState, Button } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";
import TokenForm from '../components/TokenForm';
import gql from "graphql-tag";
import { Query } from "react-apollo";

// import fetch from 'node-fetch';

import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';

const client = new ApolloClient({
    fetch: fetch
});

// Get the shop's threekit metafield
const GET_TK_METAFIELD = gql`
query {
  shop{
    metafield(namespace: "threekit", key: "token") {
      id,
      value
    }
  }
}
`

class Index extends React.Component {
  state = {
    open: false,
    hasSrc: false,
    shop: "",
    tkMetaId: {},
    metaID: '',
  };

  _queryMe = data => {
    if (data.shop.metafield == null){
      return null;
    } else {
      this.setState({
        tkMetaId: data,
        metaID: data.shop.metafield.id.split('Metafield/')[1]
      })
    }

  }


  _checkIfTK = () => {
    if(this.state.tkMetaId.shop.metafield == null){
      console.log('no TK id')
    } else {
      console.log("Yes this is TK")
    }
  }

  _formatProductID = arr => {
    arr.map(x => x.split('Product/')[1]);
  }

  // For testing
  getShopMetafield = () => {
    var fetchUrl = "/api/shopMeta";
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then(response => response.json())
      .then(json => {
        return json.data
      });
  };



  updateShopMetafield = (id, val) => {
    var fetchUrl = `/api/insertMeta/${id}/${val}`;
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then(response => response.json())
      .then(json => {
        return json.data
      });
  };

  makeScript = () => {
    var fetchUrl = `/make/script_tags`;
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then(response => response.json())
      .then(json => {
        return json.data
      });
  }

  makeShopMetafield = (val) => {
    var fetchUrl;
    if (val == 'undefined'){
      fetchUrl = "/api/makeMeta/";
    } else{
      fetchUrl = "/api/makeMeta/" + val;
    }
    var method = "GET";
    fetch(fetchUrl, { method: method })
      .then(response => response.json())
      .then(json => {

      });
  };
  

  componentDidMount() {
    console.log(this.state)
  }

  componentWillUnmount(){
    store.remove('ids')
  }

  render() {
    // This retrieves any locally stored items
    const emptyState = !store.get("ids");

    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: "Select products",
            onAction: () => this.setState({ open: true })
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={resources => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <div >
          
          <TokenForm />

  

        </div>
        {emptyState ? (
          <Layout>
            <EmptyState
              heading="Associate a Shopify product with a Threekit item."
              action={{
                content: "Select products",
                onAction: () => this.setState({ open: true })
              }}
              image={
                "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
              }
            >
              <p>Select products to associate it with a Threekit item.</p>
            </EmptyState>
          </Layout>
        ) : (
          <div>
            <Query query={GET_TK_METAFIELD} onCompleted={data => this._queryMe(data)}>
              {() => {
                return (
                  <div>
                    {""}
                  </div>
                );
              }}
            </Query>
          <ResourceListWithProducts />

          </div>
        )}
      </Page>
    );
  }
  handleSelection = resources => {
    const idsFromResources = resources.selection.map(product => product.id);
    this.setState({ open: false });
    store.set("ids", idsFromResources);
  };
}
export default Index;
