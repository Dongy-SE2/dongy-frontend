"use server";

import axios from "axios";

async function getBuyerOrder(token: string) {
  const res = await axios.get(`${process.env.BACKEND}/api/orders/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
}

export default getBuyerOrder;
