import axios from "axios";

export interface LiveInfo {
  id: number;
  title: string;
  product: string;
  startDate: string;
  endDate: string;
  status: string;
  link: string;
  image: string;
}

const getLiveById = async (liveId: string, token: string): Promise<LiveInfo | null> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives/${liveId}`;
    console.log("🔹 Fetching live event from:", url);
    console.log("🔹 Token being used:", token ? "✅ Present" : "❌ Missing");

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 10000, // ✅ Prevents indefinite waiting
    });

    console.log("✅ Live event received:", response.data);
    return response.data?.data || null;
  } catch (error: any) {
    console.error("❌ Error fetching live event:", error.response?.data || error.message);
    return null;
  }
};

export default getLiveById;
