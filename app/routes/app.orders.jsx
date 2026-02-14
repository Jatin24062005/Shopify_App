export default function Orders() {
  return (
    <s-page heading="Orders">
      {/* HEADER */}
      <s-stack direction="inline" align="space-between" gap="base">
        <s-text variant="headingLg">
          Orders from Shopify
        </s-text>

        <s-button tone="primary">
          Refresh
        </s-button>
      </s-stack>

      {/* ORDERS TABLE */}
      <s-section>
        <s-card>
          <s-stack gap="base">
            <s-text variant="headingMd">
              Orders ready to ship
            </s-text>

            <s-table>
              <s-table-head>
                <s-table-row>
                  <s-table-header>Order ID</s-table-header>
                  <s-table-header>Customer</s-table-header>
                  <s-table-header>City</s-table-header>
                  <s-table-header>Payment</s-table-header>
                  <s-table-header>Amount</s-table-header>
                  <s-table-header>Status</s-table-header>
                  <s-table-header>Action</s-table-header>
                </s-table-row>
              </s-table-head>

              <s-table-body>
                <s-table-row>
                  <s-table-cell>#1024</s-table-cell>
                  <s-table-cell>Rahul Sharma</s-table-cell>
                  <s-table-cell>Delhi</s-table-cell>
                  <s-table-cell>Prepaid</s-table-cell>
                  <s-table-cell>₹1,250</s-table-cell>
                  <s-table-cell>
                    <s-badge tone="attention">Ready to ship</s-badge>
                  </s-table-cell>
                  <s-table-cell>
                    <s-button size="slim" tone="primary">
                      Create Shipment
                    </s-button>
                  </s-table-cell>
                </s-table-row>

                <s-table-row>
                  <s-table-cell>#1023</s-table-cell>
                  <s-table-cell>Aman Verma</s-table-cell>
                  <s-table-cell>Mumbai</s-table-cell>
                  <s-table-cell>COD</s-table-cell>
                  <s-table-cell>₹2,499</s-table-cell>
                  <s-table-cell>
                    <s-badge tone="info">In transit</s-badge>
                  </s-table-cell>
                  <s-table-cell>
                    <s-button size="slim">
                      Create Shipment
                    </s-button>
                  </s-table-cell>
                </s-table-row>

                <s-table-row>
                  <s-table-cell>#1022</s-table-cell>
                  <s-table-cell>Neha Gupta</s-table-cell>
                  <s-table-cell>Bangalore</s-table-cell>
                  <s-table-cell>Prepaid</s-table-cell>
                  <s-table-cell>₹899</s-table-cell>
                  <s-table-cell>
                    <s-badge tone="success">Delivered</s-badge>
                  </s-table-cell>
                  <s-table-cell>
                    <s-button size="slim" disabled>
                      Shipped
                    </s-button>
                  </s-table-cell>
                </s-table-row>
              </s-table-body>
            </s-table>
          </s-stack>
        </s-card>
      </s-section>

      {/* SIDE INFO */}
      <s-section slot="aside">
        <s-card>
          <s-stack gap="base">
            <s-text variant="headingSm">
              How ShipDuniya works
            </s-text>

            <s-text>
              1. Orders are automatically synced from Shopify.
            </s-text>
            <s-text>
              2. Create shipment with preferred courier.
            </s-text>
            <s-text>
              3. Tracking is pushed back to Shopify.
            </s-text>
          </s-stack>
        </s-card>
      </s-section>
    </s-page>
  );
}
