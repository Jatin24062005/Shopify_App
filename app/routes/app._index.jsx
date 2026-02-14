export default function Home() {
  return (
    <s-page heading="ShipDuniya">
      
      {/* INTRO */}
      <s-section>
        <s-card>
          <s-stack gap="tight">
            <s-badge tone="info">Logistics Platform</s-badge>

            <s-text variant="headingLg">
              ShipDuniya — Logistics Control Center
            </s-text>

            <s-text tone="subdued">
              ShipDuniya connects your Shopify store with a centralized logistics
              system to automate shipping, tracking, and fulfillment workflows.
            </s-text>
          </s-stack>
        </s-card>
      </s-section>

      {/* HOW IT WORKS */}
      <s-section>
        <s-card>
          <s-stack gap="base">
            <s-text variant="headingMd">How it works</s-text>

            <s-divider />

            <s-stack gap="base">
              <s-inline-stack gap="base" align="start">
                <s-badge tone="info">1</s-badge>
                <s-stack gap="tight">
                  <s-text variant="headingSm">Order synchronization</s-text>
                  <s-text tone="subdued">
                    Orders are automatically synced from Shopify without manual uploads.
                  </s-text>
                </s-stack>
              </s-inline-stack>

              <s-inline-stack gap="base" align="start">
                <s-badge tone="info">2</s-badge>
                <s-stack gap="tight">
                  <s-text variant="headingSm">Smart courier selection</s-text>
                  <s-text tone="subdued">
                    Choose the best courier based on cost, speed, and serviceability.
                  </s-text>
                </s-stack>
              </s-inline-stack>

              <s-inline-stack gap="base" align="start">
                <s-badge tone="info">3</s-badge>
                <s-stack gap="tight">
                  <s-text variant="headingSm">Auto fulfillment updates</s-text>
                  <s-text tone="subdued">
                    Tracking details and delivery status are pushed back to Shopify.
                  </s-text>
                </s-stack>
              </s-inline-stack>
            </s-stack>
          </s-stack>
        </s-card>
      </s-section>

      {/* CAPABILITIES */}
      <s-section>
        <s-card>
          <s-stack gap="base">
            <s-text variant="headingMd">Core capabilities</s-text>

            <s-grid columns="2" gap="base">
              <s-card subdued>
                <s-text variant="headingSm">Centralized order management</s-text>
                <s-text tone="subdued">
                  Manage orders, shipments, and delivery statuses in one place.
                </s-text>
              </s-card>

              <s-card subdued>
                <s-text variant="headingSm">End-to-end tracking</s-text>
                <s-text tone="subdued">
                  Real-time shipment tracking with delivery confirmation.
                </s-text>
              </s-card>

              <s-card subdued>
                <s-text variant="headingSm">Operational visibility</s-text>
                <s-text tone="subdued">
                  Monitor shipment performance, delays, and fulfillment health.
                </s-text>
              </s-card>

              <s-card subdued>
                <s-text variant="headingSm">Scalable logistics</s-text>
                <s-text tone="subdued">
                  Built to support increasing order volumes without manual work.
                </s-text>
              </s-card>
            </s-grid>
          </s-stack>
        </s-card>
      </s-section>

      {/* NEXT ACTION */}
      <s-section>
        <s-card>
          <s-stack gap="tight" align="center">
            <s-text variant="headingMd">Next step</s-text>
            <s-text tone="subdued">
              Review your synced orders and create your first shipment.
            </s-text>
            <s-button tone="primary">Go to Orders</s-button>
          </s-stack>
        </s-card>
      </s-section>

    </s-page>
  );
}

