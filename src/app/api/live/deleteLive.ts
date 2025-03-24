"use server"
import axios from "axios";

export default async function deleteLive(liveId: string, token: string){
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives/${liveId}`;
    console.log("🗑️ Deleting live bidding event at:", url);

    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("✅ Live bidding event deleted successfully:", response.data);
    return response.status;
};
