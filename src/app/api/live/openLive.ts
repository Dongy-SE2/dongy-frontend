import axios from "axios";

const openLive = async (liveId: string, token: string): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives/${liveId}/open`;
    console.log("🎬 Opening live bidding event at:", url);

    const response = await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Live event opened successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error opening live bidding event:", error.response?.data || error.message);
    throw error;
  }
};

export default openLive;
