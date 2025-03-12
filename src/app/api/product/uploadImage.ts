"use server";
import axios from "axios";

export default async function uploadImage(
  data: FormData,
  token: string,
  id: string,
) {
  try {
    axios.put(`${process.env.BACKEND}/api/upload`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.error(e);
  }
}
