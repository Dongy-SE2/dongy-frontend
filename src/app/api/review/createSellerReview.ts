"use server";
import axios from "axios";

export interface ReviewData {
  rating: number;
  comment: string;
  seller: string;
}

const createSellerReview = async (
  token: string,
  reviewData: ReviewData,
): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/reviews`;
    console.log("🆕 Creating a new seller review at:", url);

    const response = await axios.post(
      url,
      {
        data: {
          rating: reviewData.rating,
          comment: reviewData.comment,
          seller: reviewData.seller,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("✅ Review submitted successfully:", response.data);
    return response;
  } catch (error: any) {
    console.error(
      "❌ Error submitting review:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export default createSellerReview;
