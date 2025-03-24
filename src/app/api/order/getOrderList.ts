import axios from "axios";

export interface Buyer {
  id: number;
  username: string;
  title: "นาย";
  firstname: "วสุธา";
  lastname: "สุขกระสานติ";
}

export interface Payment {
  id: number;
  amount: number;
  paymentDate: string;
}

export interface Product {
  id: number;
  product_name: string;
  categories: string;
}
export interface Order {
  id: number;
  documentId: string;
  subtotal: number;
  tax_rate: number;
  tax_amount: number;
  total_amount: number;
  discount: number;
  payable_amount: number;
  shipping_address: string | null;
  state: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tracking_no: string | null;
  courier: string | null;
  tracking_url: string | null;
  buyer: Buyer; // ✅ Buyer info
  payment: Payment; // ✅ Payment info
  product: Product;
}

export interface OrderInfo {
  id: number;
  documentId: string;
  state: string;
  tracking_no: string | null;
  courier: string | null;

  name: string;
  method: string;
  amount: number;
}

const getSellerOrders = async (
  sellerId: string,
  token: string,
): Promise<Order[]> => {
  try {
    const url = `${process.env.BACKEND}/api/orders?seller=${sellerId}&populate=buyer&populate=payment&populate=product`;
    console.log("Fetching orders from:", url);
    console.log("Authorization Token:", token);

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("GET ORDER");
    const orders: Order[] = response.data?.data || [];
    return Array.isArray(orders) ? orders : [];
  } catch (error: any) {
    console.error(
      "Error fetching orders:",
      error.response?.data || error.message,
    );
    return [];
  }
};

export default getSellerOrders;
