"use server";
import axios from "axios";

export interface ProductImage {
  id: number;
  url: string;
  thumbnail: string;
  small: string;
}

export interface LiveInfo {
  id: number;
  did: string;
  title: string; // Maps from `live_name`
  product: string; // Extract from `bidding_product.product_name`
  startDate: string; // Maps from `scheduled_live_start_time`
  endDate: string; // Maps from `scheduled_live_end_time`
  status: string; // Maps from `state`
  link: string; // Maps from `live_link`
  images: ProductImage[]; // Extract from `bidding_product.product_image`
  productDId: string;
}

const getLiveList = async (userId: string, token: string): Promise<LiveInfo[]> => {
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

    const lives: LiveInfo[] = response.data.data.map((live: any) => ({
      id: live.id,
      did: live.documentId,
      title: live.live_name,
      product: live.bidding_product?.product_name || "ไม่ระบุสินค้า",
      startDate: live.scheduled_live_start_time,
      endDate: live.scheduled_live_end_time,
      status: live.state,
      link: live.live_link || "#",
      images: live.bidding_product?.product_image
        ? live.bidding_product.product_image.map((img: any) => ({
            id: img.id,
            url: `${process.env.BACKEND}${img.url}`,
            thumbnail: `${process.env.BACKEND}${img.formats?.thumbnail?.url || img.url}`,
            small: `${process.env.BACKEND}${img.formats?.small?.url || img.url}`,
          }))
        : [{ id: 0, url: "/default-image.jpg", thumbnail: "/default-image.jpg", small: "/default-image.jpg" }], // ✅ Default if no images
      productDId: live.bidding_product?.documentId
    }));

    return lives;
  } catch (error: any) {
    console.error("❌ Error fetching live bidding data:", error.code, error.response?.data || error.message);

    return [];
  }
};

export default getLiveList;
