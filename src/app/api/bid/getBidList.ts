import axios from "axios";

export interface BidInfo {
  id: number;
  amount: number;
  user: {
    id: number;
    username: string;
  };
  createdAt: string;
}

const getBids = async (liveId: string, token: string): Promise<BidInfo[]> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/bids`;
    console.log("🔹 Fetching bids from:", url);

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 10000, // Prevents indefinite waiting
    });

    console.log("✅ Bids received:", response.data);
    return response.data?.data || [];
  } catch (error: any) {
    console.error("❌ Error fetching bids:", error.response?.data || error.message);
    return [];
  }
};

export default getBids;
