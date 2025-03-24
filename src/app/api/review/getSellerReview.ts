import axios from "axios";

export interface SellerReview {
  id: number;
  documentId: string;
  rating: number;
  comment: string;
  createdAt: string;
  buyer: {
    id: number;
    documentId: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
  };
}

const getSellerReview = async (seller_did: string, token: string): Promise<SellerReview[]> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/reviews/seller/${seller_did}`;

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.data?.data) {
      console.error("❌ No seller reviews found.");
      return [];
    }

    // ✅ Mapping API response to `SellerReview`
    const reviews: SellerReview[] = response.data.data.map((review: any) => ({
      id: review.id,
      documentId: review.documentId,
      rating: review.rating,
      comment: review.comment,
      createdAt: review.createdAt,
      buyer: {
        id: review.buyer.id,
        documentId: review.buyer.documentId,
        username: review.buyer.username,
        email: review.buyer.email,
        role: review.buyer.rolename,
      },
    }));

    console.log("✅ Seller reviews mapped successfully:", reviews);
    return reviews;
  } catch (error: any) {
    console.error("❌ Error fetching seller reviews:", error.code, error.response?.data || error.message);

    if (error.code === "ECONNRESET") {
      console.error("❌ Connection reset by server (Backend might be down or unstable)");
    } else if (error.response?.status === 401) {
      console.error("❌ Unauthorized - Invalid or expired token.");
    } else if (error.response?.status === 403) {
      console.error("❌ Access Denied (Check API permissions). ");
    } else if (error.response?.status === 404) {
      console.error("❌ API Endpoint Not Found (Check `/api/reviews/seller`)");
    } else if (error.response?.status === 500) {
      console.error("❌ Server error - Try again later.");
    }

    return [];
  }
};

export default getSellerReview;
