"use server";

import axios from "axios";

export default async function sellerPayment(data: FormData, token: string) {
    const account_number = data.get("account")?.toString() || "";
    const bank = data.get("bank")?.toString() || "";

    // Log the seller payment data to debug
    console.log("Seller Payment Data:", {
        account_number,
        bank,
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

        const response = await axios.put(
            `${process.env.BACKEND}/api/users`,
            { account_number, bank },
            { headers: { Authorization: `Bearer ${token}` } },
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