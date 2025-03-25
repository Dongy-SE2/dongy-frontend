"use server"
import axios from "axios";

export interface BidData {
  liveDId: string;
  userId: string;
  amount: number;
}

const createBid = async (token: string, liveDId:string, userId:string, amount:string): Promise<any> => {
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
          bidding_live: liveDId,
          bid_owner: userId,
          bid_placed: amount,
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
