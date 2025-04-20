"use server";
import axios from "axios";

export interface UpdateLiveData {
  title?: string; // Maps to `live_name`
  product?: string; // No direct mapping, included for clarity
  startDate?: string; // Maps to `live_start_time`
  endDate?: string; // Maps to `live_end_time`
  status?: string; // Maps to `state`
  link?: string; // Maps to `live_link`
  image?: string; // No direct mapping, optional
  present_price?: number; // ✅ Add present price
  documentId?: string; // ✅ Ensure documentId is included
  productDId?: string;
}

const updateLive = async (
  liveDId: string,
  token: string,
  updateData: UpdateLiveData,
): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    const url = `${BACKEND_URL}/api/lives/${liveDId}`;
    const mappedData = {
      live_name: updateData.title, // ✅ Maps `title` to `live_name`
      scheduled_live_start_time: updateData.startDate, // ✅ Maps `startDate` to `live_start_time`
      scheduled_live_end_time: updateData.endDate, // ✅ Maps `endDate` to `live_end_time`
      state: updateData.status, // ✅ Maps `status` to `state`
      live_link: updateData.link, // ✅ Maps `link` to `live_link`
      present_price: updateData.present_price, // ✅ Maps `present_price`
      documentId: updateData.documentId, // ✅ Maps `documentId`
      bidding_product: updateData.productDId,
    };
    console.log(mappedData);

    const response = await axios.put(
      url,
      { data: mappedData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("✅ Live bidding event updated successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "❌ Error updating live bidding event:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export default updateLive;
