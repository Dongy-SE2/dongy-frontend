"use server";

import Omise from "omise";
import { Product } from "../product/getProductList";

const omise = Omise({
  secretKey: process.env.OMISE_SECRET_KEY,
});

const paymentSubmit = async (
  form: FormData,
  amount: number,
  products: Product[],
) => {};

export default paymentSubmit;
