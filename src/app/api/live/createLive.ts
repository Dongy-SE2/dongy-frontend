import axios from "axios";

export interface CreateLiveData {
  title: string;
  product: string;
  startDate: string;
  endDate: string;
  status: string; // Example: "สาธารณะ" or "ส่วนตัว"
  link: string;
  image: string; // URL of the image
}

const createLive = async (token: string, liveData: CreateLiveData): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives`;
    console.log("🆕 Creating new live bidding event at:", url);

    const response = await axios.post(
      url,
      {
        data: liveData, // ✅ Must be wrapped inside "data"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Live bidding event created successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error creating live bidding event:", error.response?.data || error.message);
    throw error;
  }
};

export default createLive;
