import axios from "axios";

const deleteLive = async (liveId: string, token: string): Promise<boolean> => {
  try {
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
    return true;
  } catch (error: any) {
    console.error("❌ Error deleting live bidding event:", error.response?.data || error.message);
    return false;
  }
};

export default deleteLive;
