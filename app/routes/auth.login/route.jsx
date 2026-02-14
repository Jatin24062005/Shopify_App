import { Form, useActionData } from "react-router";
import { login } from "../../shopify.server";
import { useState } from "react";

export const action = async ({ request }) => {
  return login(request);
};

export default function Login() {
  const [shop, setShop] = useState("");

  return (
    <Form method="post">
      <input
        name="shop"
        placeholder="example.myshopify.com"
        value={shop}
        onChange={(e) => setShop(e.target.value)}
      />
      <button type="submit">Install App</button>
    </Form>
  );
}
