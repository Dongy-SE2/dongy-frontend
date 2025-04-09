"use server";

import axios from "axios";

export interface User {
  title: string;
  firstname: string;
  lastname: string;
  dob: string;
  phone: string;
  SSN: string;
  location: string;
  rolename: string;
  documentId: string;
  pictureUrl?: string;
  bank: string;
  account_number: string;
}

export default async function getProfile(token: string): Promise<User> {
  const res = await axios.get(
    `${process.env.BACKEND}/api/users/me?populate=profile_picture`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return {
    ...res.data,
    pictureUrl: res.data.profile_picture
      ? `${process.env.BACKEND}${res.data.profile_picture.url}`
      : null,
  };
}

