import axios from "axios";

export interface LiveInfo {
  id: number;
  title: string; // Maps to `live_name`
  product: string; // Extract from `bidding_product.product_name`
  startDate: string; // Maps to `scheduled_live_start_time`
  endDate: string; // Maps to `scheduled_live_end_time`
  status: string; // Maps to `state`
  link: string; // Maps to `live_link`
  image: string; // Extract from `bidding_product.product_image`
}

const getLiveById = async (liveDId: string, token: string): Promise<LiveInfo | null> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives/${liveDId}`;
    console.log("🔹 Fetching live event from:", url);
    console.log("🔹 Token being used:", token ? "✅ Present" : "❌ Missing");

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 10000, // ✅ Prevents indefinite waiting
    });

    const data = response.data?.data; // ✅ Ensure correct data reference

    if (!data) {
      console.error("⚠️ No live event found!");
      return null;
    }

    console.log("✅ Live event received:", data);

    return {
      id: data.id,
      title: data.live_name || "ไม่ระบุ",
      product: data.bidding_product?.product_name || "ไม่ระบุสินค้า",
      startDate: data.scheduled_live_start_time || "",
      endDate: data.scheduled_live_end_time || "",
      status: data.state || "unknown",
      link: data.live_link || "#",
      image:
        data.bidding_product?.product_image?.[0]?.url
          ? `${BACKEND_URL}${data.bidding_product.product_image[0].url}`
          : "/default-image.jpg",
    };
  } catch (error: any) {
    console.error("❌ Error fetching live event:", error.response?.data || error.message);

    return null;
  }
};

export default getLiveById;
