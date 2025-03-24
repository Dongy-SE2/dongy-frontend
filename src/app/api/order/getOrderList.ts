"use server"
import axios from "axios";

export interface Buyer {
  id: number;
  username: string;
  title: string;
  firstname: string;
  lastname: string;
}

export interface Payment {
  id: number;
  amount: number;
  paymentDate: string;
}

export interface ProductImage {
  id: number;
  url: string;
  thumbnail: string;
  small: string;
}

export interface Product {
  id: number;
  product_name: string;
  categories: string | null;
  images: ProductImage[]; // ✅ Array of images
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
  buyer: Buyer | null;
  payment: Payment | null;
  product: Product | null;
}
  
  const getSellerOrders = async (sellerId: string, token: string): Promise<Order[]> => {
    try {
      const url = `${process.env.BACKEND}/api/orders?seller=${sellerId}&populate=buyer&populate=payment&populate=product`;
      console.log("Fetching orders from:", url);
      console.log("Authorization Token:", token);
  
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const orders: Order[] = response.data?.data?.map((order: any) => ({
        id: order.id,
        documentId: order.documentId,
        subtotal: order.subtotal,
        tax_rate: order.tax_rate,
        tax_amount: order.tax_amount,
        total_amount: order.total_amount,
        discount: order.discount,
        payable_amount: order.payable_amount,
        shipping_address: order.shipping_address,
        state: order.state,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        publishedAt: order.publishedAt,
        tracking_no: order.tracking_no,
        courier: order.courier,
        tracking_url: order.tracking_url,
        buyer: order.buyer
          ? {
              id: order.buyer.id,
              username: order.buyer.username,
              title: order.buyer.title,
              firstname: order.buyer.firstname,
              lastname: order.buyer.lastname,
            }
          : null,
        payment: order.payment
          ? {
              id: order.payment.id,
              amount: order.payment.amount,
              paymentDate: order.payment.paymentDate,
            }
          : null,
        product: order.product
          ? {
              id: order.product.id,
              product_name: order.product.product_name,
              categories: order.product.categories,
              images: order.product.product_image
                ? order.product.product_image.map((img: any) => ({
                    id: img.id,
                    url: `${process.env.BACKEND}${img.url}`,
                    thumbnail: `${process.env.BACKEND}${img.formats?.thumbnail?.url || img.url}`,
                    small: `${process.env.BACKEND}${img.formats?.small?.url || img.url}`,
                  }))
                : [{ id: 0, url: "/default-product.jpg", thumbnail: "/default-product.jpg", small: "/default-product.jpg" }], // ✅ Default if no images
            }
          : null,
      })) || [];
  
      return orders;
    } catch (error: any) {
      console.error("Error fetching orders:", error.response?.data || error.message);
      return [];
    }
  };
  

export default getSellerOrders;
