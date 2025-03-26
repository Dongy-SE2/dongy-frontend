"use server";

import axios from "axios";

export default async function register(data: FormData) {
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

  // Validate password match
  if (password !== conPwd) {
    return {
      success: 0,
      message: "mismatch",
    };
  }

  // Prepare the data for registration
  const registrationData = {
    username,
    email,
    password,
    title,
    firstname,
    lastname,
    dob,
    phone,
    SSN,
    rolename,
    location,
  };

  // Log the registration data to debug
  console.log("Registration Data:", registrationData);

  try {
    console.log(
      `Registering at: ${process.env.BACKEND}/api/auth/local/register`,
    );

    // Ensure the environment variable is set correctly
    if (!process.env.BACKEND) {
      console.error("BACKEND environment variable is not set.");
      return {
        success: 0,
        message: "BACKEND environment variable is not set.",
      };
    }

    const response = await axios.post(
      `${process.env.BACKEND}/api/auth/local/register`,
      registrationData,
      { headers: { "Content-Type": "application/json" } },
    );

    // If registration is successful, redirect to the success page or home
    if (response.status === 200) {
      console.log("User registered successfully:", response.data);
      return {
        success: 1,
        message: "Successfully",
      };
    } else {
      console.error("Registration failed:", response.data);
      return {
        success: 0,
        message: "Registration failed:",
      };
    }
  } catch (error) {
    console.error("An error occurred during registration:", error);
    return {
      success: 0,
      message: "Server Failed",
    };
  }
}
