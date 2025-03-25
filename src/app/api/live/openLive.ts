"use server"
import axios from "axios";

export default async function openLive(liveId: string, token: string){
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives/${liveId}`;
    console.log("🎬 Opening live bidding event at:", url);

    const response = await axios.put(
      url,
      {data: 
        {state: "ongoing"}
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Live event opened successfully:", response.data);
    return response.status;
  } catch (error: any) {
    console.error("❌ Error opening live bidding event:", error.response?.data || error.message);
    throw error;
  }
};
