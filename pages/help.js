import React from "react";
import { Layout, Card, List } from "@shopify/polaris";
import { LoadingText } from "../components/Loading";
      
      const logo = <div style={{backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/5037953/Logos%20and%20Trademarks/threekit_logo_web_191.svg)',    backgroundPosition: '0 -49px', width: '191px', height: '49px'}}></div>

function Help() {
  return (
    <div style={{ margin: "10px" }}>
      <Layout>
        
        <Layout.Section>

          <Card title={logo} sectioned>

            <p>

              If you have any questions abour our connector, please find links
              to resources below.
            </p>
            <Card.Section>
            <List>
              <List.Item>
                <a href="https://docs.threekit.com/docs" target="_blank"><p>Threekit Documentation</p></a>
              </List.Item>
              <List.Item>
                <a href="https://docs.threekit.com/docs/tokens" target="_blank"><p>How to authenticate the Shopify Connctor with Threekit</p></a>
              </List.Item>
              <List.Item>
                <a href="https://www.threekit.com/contact-us" target="_blank"><p>Contact Threekit</p></a>
              </List.Item>
            </List>
            </Card.Section>
    
          </Card>
        </Layout.Section>
      </Layout>
    </div>
  );
}

export default Help;
