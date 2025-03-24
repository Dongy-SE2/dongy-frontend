"use server";
import axios from "axios";

const updateOrder = async (
  orderId: string,
  token: string,
  carrier: string,
  tracking: string
): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND || process.env.NEXT_PUBLIC_BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set in environment variables.");
    }

    const url = `${BACKEND_URL}/api/orders/${orderId}`;

    console.log(      {
        data: {
          state: "อยู่ระหว่างจัดส่ง",
          tracking_no: tracking,
          courier: carrier,
        },
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      const response = await axios.put(
        url,
        {
          data: {
            state: "อยู่ระหว่างจัดส่ง",
            tracking_no: tracking,
            courier: carrier,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
    return response.data;
  } catch (error: any) {
    console.error("Error updating order:", error.response?.status, error.response?.data || error.message);
    throw error;
  }
};

export default updateOrder;