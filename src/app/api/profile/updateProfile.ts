"use server";

import { client } from "@/lib/utils";
import axios from "axios";

export default async function updateProfile(
  data: FormData,
  userId: string,
  token: string,
) {
  const title = data.get("title")?.toString();
  const firstname = data.get("firstname")?.toString();
  const lastname = data.get("lastname")?.toString();
  const dob = data.get("dob")?.toString();
  const phone = data.get("tel")?.toString();
  const SSN = data.get("SSN")?.toString();
  const location = data.get("location")?.toString();
  const username = data.get("username")?.toString();
  const email = data.get("email")?.toString();
  const password = data.get("password")?.toString();
  const conPwd = data.get("confirmPassword")?.toString();
  const rolename = data.get("role")?.toString();
  const profileImage = data.get("image");
  if (
    password &&
    conPwd &&
    password.length > 0 &&
    conPwd.length > 0 &&
    password !== conPwd
  ) {
    return {
      success: 0,
      message: "mismatch",
    };
  }
  const updateData = {
    username,
    email,
    password: password && password?.length > 0 ? password : undefined,
    title,
    firstname,
    lastname,
    dob,
    phone,
    SSN,
    rolename,
    location,
  };

  try {
    // console.log(`Sending:`, updateData);
    // const res = await axios.put(
    //   `${process.env.BACKEND}/api/users/${userId}`,
    //   updateData,
    //   {
    //     headers: { Authorization: `Bearer ${token}` },
    //   },
    // );
    // console.log(res);
    const formData = new FormData();
    formData.append("files", profileImage as any);
    formData.append("ref", "plugin::users-permissions.user");
    formData.append("refId", userId);
    formData.append("field", "profile_picture");

    const upload = await client.POST("/upload", {
      body: formData as any,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(upload.response);
  } catch (e) {
    console.error(e);
  }
}
