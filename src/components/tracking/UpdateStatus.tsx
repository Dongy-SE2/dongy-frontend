"use client";
import { type Order } from "@/app/api/order/getBuyerOrderList";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import updateBuyerOrderState from "@/app/api/order/updateBuyerOrderState";
import { Waveform } from "ldrs/react";
import 'ldrs/react/Waveform.css'

const UpdateStatus: React.FC<{
  order: Order;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ order, loading ,setLoading }) => {
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
    setLoading(false)
  };
  return (
    <>
    <div className="w-full flex justify-center mt-5">
    {loading && (
  <div className="flex flex-col items-center justify-center mb-3 ">
    <p className="text-black text-sm mb-2">Loading...</p>
    <Waveform size="20" speed="1" color="black" stroke="1" />
  </div>
)}

      {!loading && (
        <div>
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
      </div>)}

    </div>
    </>
  );
};

export default UpdateStatus;
