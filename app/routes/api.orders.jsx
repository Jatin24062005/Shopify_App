  import shopify from "../shopify.server.js";

  export async function loader({ request }) {
    try {
      // 🔑 THIS LINE IS WHAT SHOPIFY EMBEDDED CHECK IS WAITING FOR
      const { admin } = await shopify.authenticate.admin(request);

      return Response.json({
        orders: [
          {
            id: 1024,
            customer: "Rahul Sharma",
            city: "Delhi",
            payment: "Prepaid",
            amount: "₹1,250",
            status: "Ready to ship",
          },
        ],
      });
    } catch (error) {
      return new Response("Unauthorized", { status: 401 });
    }
  }