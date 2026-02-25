import { redirect, Form, useLoaderData } from "react-router";
import { login } from "../../shopify.server";
import styles from "./styles.module.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function App() {
  const { showForm } = useLoaderData();

  return (
<div className={styles.wrapper}>
  {/* background decoration */}
  <div className={styles.bgGrid} />
  <div className={styles.bgGlow} />
<div className={styles.bgGlowAlt} />
  <div className={styles.card}>
    {/* LEFT */}
    <div className={styles.left}>
      {/* Brand row */}
      <div className={styles.brandRow}>
        <img
          src="/logo.png"
          alt="ShipDuniya"
          className={styles.logo}
        />
        <div>
          <h1>ShipDuniya</h1>
          <span>Logistics & Shipping Platform</span>
        </div>
      </div>

      <h2 className={styles.heading}>
        A premium courier and logistics platform for modern commerce
      </h2>

      <p className={styles.subtext}>
        Ship orders faster, track shipments in real time, and automate
        logistics directly from your Shopify store — all from one dashboard.
      </p>

      {showForm && (
        <Form className={styles.form} method="post" action="/auth/login">
          <label className={styles.label}>
            <span>Shopify Store Domain</span>
            <input
              className={styles.input}
              type="text"
              name="shop"
              placeholder="your-store.myshopify.com"
              required
            />
            <small>Secure OAuth-based Shopify authentication</small>
          </label>

          <button className={styles.button} type="submit">
            Connect with Shopify
          </button>
        </Form>
      )}

      {/* Shopify trust */}
      <div className={styles.shopifyRow}>
        <img
          src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
          alt="Shopify"
        />
        <span>Official Shopify Integration</span>
      </div>

      {/* Features */}
      <ul className={styles.features}>
        <li>
          <strong>🚚 Automated Shipping</strong>
          <span>Courier allocation, labels & dispatch in seconds</span>
        </li>
        <li>
          <strong>📦 Real-Time Tracking</strong>
          <span>Live shipment updates synced with Shopify orders</span>
        </li>
        <li>
          <strong>🔗 Native Shopify Sync</strong>
          <span>No code · Secure · One-click setup</span>
        </li>
      </ul>
    </div>

    {/* RIGHT */}
  <div className={styles.right}>
  <img
    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
    alt="Logistics and parcel delivery"
    className={styles.rightImage}
  />

  <div className={styles.overlay}>
  </div>
</div>
  </div>
</div>
  );
}