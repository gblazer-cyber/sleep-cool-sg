export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// Brand constants — easy to update later
export const BRAND_NAME = "Sleep Cool SG";
export const PRODUCT_NAME = "Sleep Cool";
export const WHATSAPP_NUMBER = "6580205462"; // Replace with actual number
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in Sleep Cool SG. Can I ask about pricing and fit for my bed?"
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
