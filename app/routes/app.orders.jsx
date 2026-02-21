import { useLoaderData } from "react-router";
import shopify from "../shopify.server.js";

// SERVER: loader runs on the server and uses the authenticated admin client
export async function loader({ request }) {
  const { admin } = await shopify.authenticate.admin(request);

  // Real Admin GraphQL call to get orders
  const response = await admin.graphql(
    `#graphql
    query OrdersList($first: Int!) {
      orders(first: $first, reverse: true) {
        edges {
          node {
            id
            name
            createdAt
            displayFinancialStatus
            shippingAddress {
              city
            }
            totalPriceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }`,
    { variables: { first: 5 } },
  );

  const json = await response.json();
  const edges = json?.data?.orders?.edges ?? [];

  const orders = edges.map(({ node }) => ({
    id: node.id,
    customer: node.name, // or parse more accurately from line items/customer object
    city: node.shippingAddress?.city || "—",
    payment: node.displayFinancialStatus,
    amount: `${node.totalPriceSet?.shopMoney?.amount} ${node.totalPriceSet?.shopMoney?.currencyCode}`,
    status: node.displayFinancialStatus,
  }));

  const sessionDemo = {
    ok: true,
    message: "Embedded admin session working (real data)",
    shop: {
      name: "Unknown shop (you can fetch this via another query)",
      domain: "unknown.myshopify.com",
    },
    checkedAt: new Date().toISOString(),
  };

  return { sessionDemo, orders };
}

// CLIENT: component uses useLoaderData() to read server data
export default function Orders() {
  const { sessionDemo, orders } = useLoaderData();

  return (
    <s-page heading="Orders">
      {/* SESSION DEMO BANNER */}
      <s-section>
        <s-card>
          <s-stack gap="base">
            <s-text variant="headingMd">Embedded session status</s-text>
            <s-text as="p">
              {sessionDemo.message} — Checked at{" "}
              <code>{sessionDemo.checkedAt}</code>
            </s-text>
            <s-text as="p">
              Shop: {sessionDemo.shop.name} ({sessionDemo.shop.domain})
            </s-text>
          </s-stack>
        </s-card>
      </s-section>

      {/* ORDERS HEADER */}
      <s-stack direction="inline" align="space-between" gap="base">
        <s-text variant="headingLg">Orders from server session</s-text>
        {/* If you later want to refetch via action or navigation you can add a button here */}
      </s-stack>

      {/* ORDERS TABLE */}
      <s-section>
        <s-card>
          <s-stack gap="base">
            <s-text variant="headingMd">Orders ready to ship</s-text>

            <s-table>
              <s-table-head>
                <s-table-row>
                  <s-table-header>Order ID</s-table-header>
                  <s-table-header>Customer</s-table-header>
                  <s-table-header>City</s-table-header>
                  <s-table-header>Payment</s-table-header>
                  <s-table-header>Amount</s-table-header>
                  <s-table-header>Status</s-table-header>
                </s-table-row>
              </s-table-head>

              <s-table-body>
                {orders.map((order) => (
                  <s-table-row key={order.id}>
                    <s-table-cell>#{order.id}</s-table-cell>
                    <s-table-cell>{order.customer}</s-table-cell>
                    <s-table-cell>{order.city}</s-table-cell>
                    <s-table-cell>{order.payment}</s-table-cell>
                    <s-table-cell>{order.amount}</s-table-cell>
                    <s-table-cell>
                      <s-badge tone="success">{order.status}</s-badge>
                    </s-table-cell>
                  </s-table-row>
                ))}
              </s-table-body>
            </s-table>
          </s-stack>
        </s-card>
      </s-section>
    </s-page>
  );
}