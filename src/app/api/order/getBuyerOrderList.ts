"use server";

import axios from "axios";

export interface Order {
  name: string;
  price: number;
  image: string;
  receiver: string;
  tel: string;
  location: string;
  courier: string;
  trackingId: string;
  trackingUrl: string;
}

async function getBuyerOrder(token: string): Promise<Order[]> {
  const res = await axios.get(`${process.env.BACKEND}/api/orders/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const profile = await axios.get(`${process.env.BACKEND}/api/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data: Order[] = res.data.data?.map((val: any) => ({
    name: val.product.product_name,
    price: val.total_amount,
    image: `${process.env.BACKEND}${val.product?.product_image[0].url}`,
    receiver: `${profile.data.firstname} ${profile.data.lastname}`,
    tel: profile.data.phone,
    location: val.shipping_address,
    courier: val.courier,
    trackingId: val.tracking_no,
    trackingUrl: val.tracking_url,
  }));
  return data;
}

export default getBuyerOrder;
