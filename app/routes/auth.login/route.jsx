import { Form } from "react-router";
import { login } from "../../shopify.server";
import { useState } from "react";
import styles from "./login.module.css";

export const action = async ({ request }) => {
  return login(request);
};

export default function Login() {
  const [shop, setShop] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Branding */}
        <div className={styles.brandRow}>
          <img
            src="/logo.png"
            alt="ShipDuniya"
            className={styles.logo}
          />
          <div>
            <h1>ShipDuniya</h1>
            <span>Shopify Logistics Integration</span>
          </div>
        </div>

        <h2 className={styles.heading}>Install ShipDuniya</h2>
        <p className={styles.subtext}>
          Connect your Shopify store to automate shipping, tracking, and
          logistics.
        </p>

        <Form method="post" className={styles.form}>
          <label className={styles.label}>
            <span>Shopify Store Domain</span>
            <input
              name="shop"
              placeholder="your-store.myshopify.com"
              value={shop}
              onChange={(e) => setShop(e.target.value)}
              required
              className={styles.input}
            />
            <small>We use this only to securely authenticate your store</small>
          </label>

          <button type="submit" className={styles.button}>
            Install App
          </button>
        </Form>

        {/* Shopify trust */}
        <div className={styles.shopifyRow}>
          <img
            src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
            alt="Shopify"
          />
          <span>Official Shopify OAuth Integration</span>
        </div>
      </div>
    </div>
  );
}