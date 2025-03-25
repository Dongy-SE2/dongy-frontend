"use server"
import axios from "axios";

const createLive = async (token: string, sellerId: string): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives`;
    console.log("🆕 Creating new live bidding event at:", url);

    const response = await axios.post(
      url,
      {
        data:{
          owner: sellerId
        }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Live bidding event created successfully:", response.data);
    return response.status;
  } catch (error: any) {
    console.error("❌ Error creating live bidding event:", error.response?.data || error.message);
    throw error;
  }
};

export default createLive;
