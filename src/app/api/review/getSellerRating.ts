"use server";
import axios from "axios";

export interface SellerRating {
  id: number;
  username: string;
  email: string;
  title: string;
  firstname: string;
  lastname: string;
  phone: string;
  rolename: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  documentId: string;
  average_rating: number;
  total_reviews: number;
  profile_picture: {
    id: number;
    url: string;
    thumbnail: string;
  } | null;
}

const getSellerRating = async (sellerDid: string, token: string): Promise<SellerRating | null> => {
  try {
    const url = `${process.env.BACKEND}/api/reviews/seller/${sellerDid}/rating`;
    console.log("Fetching seller rating from:", url);
    console.log("Authorization Token:", token);

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const sellerData = response.data?.data;
    if (!sellerData) return null;

    return {
      id: sellerData.id,
      username: sellerData.username,
      email: sellerData.email,
      title: sellerData.title,
      firstname: sellerData.firstname,
      lastname: sellerData.lastname,
      phone: sellerData.phone,
      rolename: sellerData.rolename,
      location: sellerData.location,
      createdAt: sellerData.createdAt,
      updatedAt: sellerData.updatedAt,
      documentId: sellerData.documentId,
      average_rating: sellerData.average_rating,
      total_reviews: sellerData.total_reviews,
      profile_picture: sellerData.profile_picture
        ? {
            id: sellerData.profile_picture.id,
            url: `${process.env.BACKEND}${sellerData.profile_picture.url}`,
            thumbnail: `${process.env.BACKEND}${sellerData.profile_picture.formats?.thumbnail?.url || sellerData.profile_picture.url}`,
          }
        : { id: 0, url: "/default-product.jpg", thumbnail: "/default-product.jpg" },
    };
  } catch (error: any) {
    console.error("Error fetching seller rating:", error.response?.data || error.message);
    return null;
  }
};

export default getSellerRating;
