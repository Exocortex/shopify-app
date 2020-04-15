require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
const Router = require("koa-router");
const router = new Router();
const fetch = require('node-fetch');
// const fetch = require('cross-fetch');

dotenv.config();
const { default: graphQLProxy } = require("@shopify/koa-shopify-graphql-proxy");
const { ApiVersion } = require("@shopify/koa-shopify-graphql-proxy");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

// Error test
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import ApolloClient from 'apollo-client'
import { API_URL } from '...'

const client = new ApolloClient({
  link: createHttpLink({
    uri: API_URL,
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
})
// end error test

app.prepare().then(() => {
  const server = new Koa();
  server.use(session({ secure: true, sameSite: "none" }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ["read_products", "write_products", "write_script_tags"],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        ctx.cookies.set("shopOrigin", shop, {
          httpOnly: false,
          secure: true,
          sameSite: "none"
        });
        ctx.cookies.set("accessToken", accessToken);
        ctx.redirect("/");
      }
    })
  );
  // Test backend routes

  // Get Shop Metafields
  // router.get("/api/shopMeta", async ctx => {
  //   try {
  //     const results = await fetch(
  //       "https://" + ctx.cookies.get("shopOrigin") + "/admin/metafields.json",
  //       {
  //         headers: {
  //           "X-Shopify-Access-Token": ctx.cookies.get("accessToken")
  //         }
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(json => {
  //         return json;
  //       });
  //     ctx.body = {
  //       status: "success",
  //       data: results
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  // Create threekit shop-wide metafield
  router.get("/api/makeMeta/:value", async ctx => {
    try {
      const results = await fetch(
        "https://" +
          ctx.cookies.get("shopOrigin") +
          "/admin/api/2020-01/metafields.json",
        {
          headers: {
            "X-Shopify-Access-Token": ctx.cookies.get("accessToken"),
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            metafield: {
              namespace: "threekit",
              key: "token",
              value: `'${ctx.params.value}'`,
              value_type: "string"
            }
          })
        }
      )
        .then(response => response.json())
        .then(json => {
          // console.log(JSON.parse(json))
          return json;
        });
      ctx.body = {
        status: "success",
        data: results
      };
    } catch (err) {
      console.log(err);
    }
  });

  // Get product images
  // router.get("/api/images/:id", async ctx => {
  //   try {
  //     const results = await fetch(
  //       "https://" +
  //         ctx.cookies.get("shopOrigin") +
  //         "/admin/api/2020-01/products/" +
  //         ctx.params.id +
  //         "/images.json",
  //       {
  //         headers: {
  //           "X-Shopify-Access-Token": ctx.cookies.get("accessToken")
  //         }
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(json => {
  //         return json;
  //       });
  //     ctx.body = {
  //       status: "success",
  //       data: results
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  // create make threekit image - product id parameter
  // router.get("/images/create/:id", async ctx => {
  //   try {
  //     const results = await fetch(
  //       "https://" +
  //         ctx.cookies.get("shopOrigin") +
  //         "/admin/api/2020-01/products/" +
  //         ctx.params.id +
  //         "/images.json",
  //       {
  //         headers: {
  //           "X-Shopify-Access-Token": ctx.cookies.get("accessToken"),
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         method: "POST",
  //         body: JSON.stringify({
  //           image: { src: 'https://solutions-engineering.s3.amazonaws.com/Connectors/Magento/Media/360_thumb.png'}
  //         })
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(json => {
  //         return json;
  //       });
  //     ctx.body = {
  //       status: "success",
  //       data: results
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  // Insert threekit-products into the metafield.
  // You will need to get all of the values and then submit them together in order to retain data
  router.get("/api/insertMeta/:id/:value", async ctx => {
    try {
      const results = await fetch(
        "https://" +
          ctx.cookies.get("shopOrigin") +
          "/admin/api/2020-01/metafields/" +
          ctx.params.id +
          ".json",
        {
          headers: {
            "X-Shopify-Access-Token": ctx.cookies.get("accessToken"),
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: JSON.stringify({
            metafield: {
              id: ctx.params.id,
              value: `${ctx.params.value}`,
              value_type: "string"
            }
          })
        }
      )
        .then(response => response.json())
        .then(json => {
          // console.log(JSON.parse(json))
          return json;
        });
      ctx.body = {
        status: "success",
        data: results
      };
    } catch (err) {
      console.log(err);
    }
  });

  // router.get("/api/:object", async ctx => {
  //   try {
  //     const results = await fetch(
  //       "https://" +
  //         ctx.cookies.get("shopOrigin") +
  //         "/admin/api/2020-01/" +
  //         ctx.params.object +
  //         ".json",
  //       {
  //         headers: {
  //           "X-Shopify-Access-Token": ctx.cookies.get("accessToken")
  //         }
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(json => {
  //         return json;
  //       });
  //     ctx.body = {
  //       status: "success",
  //       data: results
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  // router.get("/make/:object", async ctx => {
  //   try {
  //     const results = await fetch(
  //       "https://" +
  //         ctx.cookies.get("shopOrigin") +
  //         "/admin/api/2020-01/" +
  //         ctx.params.object +
  //         ".json",
  //       {
  //         method: "POST",
  //         headers: {
  //           "X-Shopify-Access-Token": ctx.cookies.get("accessToken"),
  //           "Content-Type": "application/json",
  //           Accept: "application/json"
  //         },
  //         body: JSON.stringify({
  //           script_tag: {
  //             event: "onload",
  //             src: "https://preview.threekit.com/app/js/threekit-player.js"
  //           }
  //         })
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(json => {
  //         return json;
  //       });
  //     ctx.body = {
  //       status: "success",
  //       data: results
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // end of result
  // });

  // router.get("/delete/:object/:id", async ctx => {
  //   try {
  //     const results = await fetch(
  //       "https://" +
  //         ctx.cookies.get("shopOrigin") +
  //         "/admin/api/2020-01/" +
  //         ctx.params.object +
  //         `/${ctx.params.id}` +
  //         ".json",
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "X-Shopify-Access-Token": ctx.cookies.get("accessToken"),
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(json => {
  //         return json;
  //       });
  //     ctx.body = {
  //       status: "success",
  //       data: results
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // end of result
  // });

  // Routes for API
  server.use(router.routes());

  server.use(graphQLProxy({ version: ApiVersion.October19 }));
  server.use(verifyRequest());
  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
