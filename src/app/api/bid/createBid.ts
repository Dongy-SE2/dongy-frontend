import axios from "axios";

export interface BidData {
  liveId: string;
  userId: string;
  amount: number;
}

const createBid = async (token: string, bidData: BidData): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/bids`;
    console.log("🆕 Placing a new bid at:", url);

    const response = await axios.post(
      url,
      {
        data: {
          live: bidData.liveId,
          user: bidData.userId,
          amount: bidData.amount,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Bid placed successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error placing bid:", error.response?.data || error.message);
    throw error;
  }
};

export default createBid;
