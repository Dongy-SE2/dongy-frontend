import axios from "axios";

export interface UpdateLiveData {
  title?: string;
  product?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  link?: string;
  image?: string;
}

const updateLive = async (liveId: string, token: string, updateData: UpdateLiveData): Promise<any> => {
  try {
    const BACKEND_URL = process.env.BACKEND;
    if (!BACKEND_URL) {
      throw new Error("❌ BACKEND_URL is not set!");
    }

    const url = `${BACKEND_URL}/api/lives/${liveId}`;
    console.log("📝 Updating live bidding event at:", url);

    const response = await axios.put(
      url,
      { data: updateData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Live bidding event updated successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error updating live bidding event:", error.response?.data || error.message);
    throw error;
  }
};

export default updateLive;
