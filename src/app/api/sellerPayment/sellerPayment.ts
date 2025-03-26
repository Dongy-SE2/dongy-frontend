"use server";

import axios from "axios";
// import Cookies from "js-cookie";

export default async function sellerPayment(data: FormData) {
    const account = data.get("account")?.toString() || "";
    const bank = data.get("bank")?.toString() || "";
    const image = data.get("image") as File;

    if (!image) {
        console.error("Image is undefined or not provided.");
        return {
            success: 0,
            message: "Image is required.",
        };
    }

    // Prepare the data for seller payment
    const sellerPaymentData = new FormData();
    sellerPaymentData.append("account", account);
    sellerPaymentData.append("bank", bank);
    sellerPaymentData.append("image", image);

    // Log the seller payment data to debug
    console.log("Seller Payment Data:", {
        account,
        bank,
        image,
    });

    try {
        console.log(
            `Seller Payment at: ${process.env.BACKEND}/api/sellerpayment`,
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
            `${process.env.BACKEND}/api/sellerpayment`,
            sellerPaymentData,
            { headers: { "Content-Type": "multipart/form-data" } },
        );

        // Cookies.set("paymentInfo", JSON.stringify(sellerPaymentData), { expires: 1 / 24 })

        if (response.status === 200) {
            console.log("SellerPayment Register Successful:", response.data);
            return {
                success: 1,
                message: "Success",
            }
        }
        else {
            console.error("SellerPayment Register Error:", response.data);
            return {
                success: 0,
                message: "Failed",
            };
        }
    } catch (error) {
        console.error("Seller Payment Error:", error);
        return {
            success: 0,
            message: "Server failed",
        };
    }
}

export async function getSellerPayment(): Promise<boolean> {
    try {
        const response = await axios.get(
            `${process.env.BACKEND}/api/sellerpayment`,
            { headers: { "Content-Type": "application/json" } },
        );

        if (response.status === 200) {
            console.log("Get SellerPayment Successful:", response.data);
            return true;
        }
        else {
            console.error("Get SellerPayment Error:", response.data);
            return false;
        }
    } catch (error) {
        console.error("Get Seller Payment Error:", error);
        return false;
    }
}