import axios from "axios";

export interface LiveInfo {
  id: number;
  title: string; // Maps from `live_name`
  product: string; // Extract from `bidding_product.product_name`
  startDate: string; // Maps from `scheduled_live_start_time`
  endDate: string; // Maps from `scheduled_live_end_time`
  status: string; // Maps from `state`
  link: string; // Maps from `live_link`
  image: string; // Extract from `bidding_product.image_url`
}

const getLive = async (userId: string, token: string): Promise<LiveInfo[]> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives/me`;
    console.log("🔹 Fetching live bidding data from:", url);
    console.log("🔹 Token being used:", token ? "✅ Present" : "❌ Missing");

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 10000, // ✅ Prevents indefinite waiting (10 seconds max)
    });

    if (!response.data?.data) {
      console.error("❌ No live events found.");
      return [];
    }

    // ✅ Mapping API response to `LiveInfo`
    const lives: LiveInfo[] = response.data.data.map((live: any) => ({
      id: live.id,
      title: live.live_name,
      product: live.bidding_product?.product_name || "ไม่ระบุสินค้า",
      startDate: live.scheduled_live_start_time,
      endDate: live.scheduled_live_end_time,
      status: live.state,
      link: live.live_link || "#",
      image: live.bidding_product?.image_url || "/default-image.jpg",
    }));

    console.log("✅ Live bidding data mapped successfully:", lives);
    return lives;
  } catch (error: any) {
    console.error("❌ Error fetching live bidding data:", error.code, error.response?.data || error.message);

    if (error.code === "ECONNRESET") {
      console.error("❌ Connection reset by server (Backend might be down or unstable)");
    } else if (error.response?.status === 401) {
      console.error("❌ Unauthorized - Invalid or expired token.");
    } else if (error.response?.status === 403) {
      console.error("❌ Access Denied (Check API permissions).");
    } else if (error.response?.status === 404) {
      console.error("❌ API Endpoint Not Found (Check `/api/lives/me`)");
    } else if (error.response?.status === 500) {
      console.error("❌ Server error - Try again later.");
    }

    return [];
  }
};

export default getLive;
