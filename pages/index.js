import { Layout, Page, TextStyle, EmptyState } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';


class Index extends React.Component {
  state = { open: false };
  render() {
    const emptyState = !store.get('ids');

    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Select products',
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? (
        <Layout>
          <EmptyState
            heading="Associate a Shopify product with a Threekit item."
            action={{
              content: 'Select products',
              onAction: () => this.setState({ open: true }),
            }}
            image={'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'}
          >
            <p>Select products to associate it with a Threekit item.</p>
          </EmptyState>
        </Layout>
          ) : (
        <ResourceListWithProducts />
        )}
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    store.set('ids', idsFromResources);

  };
}
export default Index;