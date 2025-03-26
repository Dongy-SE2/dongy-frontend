"use server";
import axios from "axios";

export default async function uploadProfilePicture(file: File, token: string) {
  const formData = new FormData();
  formData.append("files", file);

  const res = await axios.post(
    `${process.env.BACKEND}/api/upload`,
    formData,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return `${process.env.BACKEND}${res.data[0].url}`;
}
