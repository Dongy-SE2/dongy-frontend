"use client";
import { type Order } from "@/app/api/order/getBuyerOrderList";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import updateBuyerOrderState from "@/app/api/order/updateBuyerOrderState";

const UpdateStatus: React.FC<{
  order: Order;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ order, setLoading }) => {
  const router = useRouter();
  const { data } = useSession();

  const updateStatusHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setLoading(true);
    const { ok, error } = await updateBuyerOrderState(
      order.id,
      data?.user.jwt || "",
    );
    if (ok) {
      alert("Success!");
      router.refresh();
    } else {
      console.error(error);
    }
  };
  return (
    <div className="w-full flex justify-center mt-5">
      <Link
        href=""
        className="rounded-md px-5 py-3 bg-red-400 text-white font-medium mr-7"
      >
        รายงานปัญหา
      </Link>
      <button
        className="rounded-md px-5 py-3 bg-green-500 text-white font-medium"
        onClick={updateStatusHandler}
      >
        ได้รับสินค้าแล้ว
      </button>
    </div>
  );
};

export default UpdateStatus;
