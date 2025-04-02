// "use server";

// import axios from "axios";

// export interface User {
//   title: string;
//   firstname: string;
//   lastname: string;
//   dob: string;
//   phone: string;
//   SSN: string;
//   location: string;
//   rolename: string;
//   documentId: string;
//   pictureUrl?: string;
//   bank: string;
//   account_number: string;
// }

// export default async function getProfile(token: string): Promise<User> {
//   const res = await axios.get(
//     `${process.env.BACKEND}/api/users/me?populate=profile_picture`,
//     { headers: { Authorization: `Bearer ${token}` } },
//   );
//   return {
//     ...res.data,
//     pictureUrl: res.data.profile_picture
//       ? `${process.env.BACKEND}${res.data.profile_picture.url}`
//       : null,
//   };
// }


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
  // If no BACKEND is defined or we're in mock mode
  if (!process.env.BACKEND || process.env.MOCK_MODE === "true") {
    console.warn("Backend not found or MOCK_MODE=true – returning mock user");
    return {
      title: "Mr.",
      firstname: "Mock",
      lastname: "User",
      dob: "2000-01-01",
      phone: "000-000-0000",
      SSN: "123456789",
      location: "Nowhere",
      rolename: "buyer",
      documentId: "DOC000",
      pictureUrl: "/image/ProfilePicture.jpg",
      bank: "Mock Bank",
      account_number: "0000000000",
    };
  }

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
