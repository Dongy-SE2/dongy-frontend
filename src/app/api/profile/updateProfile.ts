"use server";

import { client } from "@/lib/utils";
import axios from "axios";
import { profile } from "console";

export default async function updateProfile(
  data: FormData,
  userId: string,
  token: string,
) {
  const title = data.get("title")?.toString();
  const firstname = data.get("firstname")?.toString();
  const lastname = data.get("lastname")?.toString();
  const dob = data.get("dob")?.toString();
  const phone = data.get("phone")?.toString();
  const SSN = data.get("SSN")?.toString();
  const location = data.get("location")?.toString();
  const email = data.get("email")?.toString();
  const profileImage = data.get("image");

  try {
    const res = await axios.put(
      `${process.env.BACKEND}/api/users`,
      {
          email: email,
          title: title,
          firstname: firstname,
          lastname: lastname,
          dob: dob,
          phone: phone,
          SSN:SSN,
          location: location,
        
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if((profileImage as any).size > 0){

      const formData = new FormData();
      formData.append("profile_picture", profileImage as any);
      const upload = await axios.put(
        `${process.env.BACKEND}/api/users`,
        formData as any,
        {
        headers: {Authorization: `Bearer ${token}`,},
        },
      );
    }
  } catch (e) {
    console.error(e);
  }
}
