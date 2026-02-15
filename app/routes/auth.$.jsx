import  shopify  from "../shopify.server";

export const loader = async ({ request }) => {
  return shopify.auth.callback({
    request,
    redirectTo: "/app",
  });
};
