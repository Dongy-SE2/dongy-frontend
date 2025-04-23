"use server";
import axios from "axios";

export interface BidInfo {
  id: number;
  bidPlaced: number; // Maps to `bid_placed`
  documentId: string;
  createdAt: string;
  updatedAt: string;
  bidOwnerFirstName: string;
  bidOwnerLastName: string;
}
export interface LiveInfo {
  id: number;
  title: string; // Maps to `live_name`
  product: string; // Extract from `bidding_product.product_name`
  startDate: string; // Maps to `scheduled_live_start_time`
  endDate: string; // Maps to `scheduled_live_end_time`
  status: string; // Maps to `state`
  link: string; // Maps to `live_link`
  image: string; // Extract from `bidding_product.product_image`
  sellerName: string;
  productType: string;
  productDescription: string;
  presentPrice: string;
  bids: BidInfo[];
  productDId: string;
  OwnerFirstName: string;
  OwnerLastName: string;
}

const getLiveById = async (
  liveDId: string,
  token: string,
): Promise<LiveInfo | null> => {
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
      timeout: 10000,
    });

    const data = response.data?.data;
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
      status: data.state,
      link: data.live_link,
      image: data.bidding_product?.product_image?.[0]?.url
        ? `${BACKEND_URL}${data.bidding_product.product_image[0].url}?`
        : "/default-image.jpg",
      sellerName: data.sellerName,
      productDescription: data.bidding_product?.product_description,
      productType: data.bidding_product?.categories,
      presentPrice: data.present_price?.toString(),
      bids: data.bids?.map((bid: any) => ({
        id: bid.id,
        bidPlaced: bid?.bid_placed,
        documentId: bid?.documentId,
        createdAt: bid?.createdAt,
        updatedAt: bid?.updatedAt,
        bidOwnerFirstName: bid.bid_owner?.firstname,
        bidOwnerLastName: bid.bid_owner?.lastname,
      })),
      productDId: data.bidding_product.documentId,
      OwnerFirstName: data.bidding_product.owner.firstname,
      OwnerLastName: data.bidding_product.owner.lastname || [],
    };
  } catch (error: any) {
    console.error(
      "❌ Error fetching live event:",
      error.response?.data || error.message,
    );
    return null;
  }
};

export default getLiveById;
