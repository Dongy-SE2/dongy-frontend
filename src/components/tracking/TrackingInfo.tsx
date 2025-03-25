"use client";

import { useContext } from "react";
import { orderProvider } from "./OrderProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import updateBuyerOrderState from "@/app/api/order/updateBuyerOrderState";

interface StatusProps {
  name: string;
  textColor: string;
  color: string;
}

function Status({ name, textColor, color }: StatusProps) {
  return (
    <p
      className={`text-${textColor} bg-${color} rounded-xl w-40 py-0.5 text-center align-middle`}
    >
      {name}
    </p>
  );
}

const statusMap = {
  อยู่ระหว่างจัดส่ง: (
    <Status
      name={"อยู่ระหว่างจัดส่ง"}
      textColor="yellow-600"
      color="yellow-100"
    />
  ),
  รอการจัดส่ง: (
    <Status name={"รอการจัดส่ง"} textColor="gray-600" color="gray-100" />
  ),
  ได้รับสินค้าแล้ว: (
    <Status name={"ได้รับสินค้าแล้ว"} textColor="green-700" color="green-100" />
  ),
};

export default function TrackingInfo() {
  const { orders, idx } = useContext(orderProvider);
  const router = useRouter();
  const { data } = useSession();
  return (
    <>
      <div
        className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-[0.9rem] grid-flow-row-dense bg-white shadow-md rounded-xl px-8 py-6 w-[35rem] h-72"
        style={{ gridAutoRows: "minmax(auto, max-content)" }}
      >
        {!orders[idx] ? (
          <p>ไม่พบสินค้า</p>
        ) : (
          <>
            <p>ชื่อผู้รับ</p>
            <p>{orders[idx].receiver}</p>
            <p>เบอร์โทรศัพท์</p>
            <p>{orders[idx].tel}</p>
            <p>ที่อยู่จัดส่ง</p>
            <p className="w-96">{orders[idx].location}</p>
            <p>จัดส่งโดย</p>
            <p>{orders[idx].courier}</p>
            <p>Tracking No</p>
            {!orders[idx].trackingId ? (
              <p>-</p>
            ) : !orders[idx].trackingUrl ? (
              <p>{orders[idx].trackingId}</p>
            ) : (
              <Link href={orders[idx].trackingUrl}>
                {orders[idx].trackingId}
              </Link>
            )}
            <p>สถานะ</p>
            {statusMap[orders[idx].state]}
          </>
        )}
      </div>
      {orders[idx].state === "ได้รับสินค้าแล้ว" ? (
        <></>
      ) : (
        <div className="w-full flex justify-center mt-5">
          <Link
            href=""
            className="rounded-md px-5 py-3 bg-red-400 text-white font-medium mr-7"
          >
            รายงานปัญหา
          </Link>
          <button
            className="rounded-md px-5 py-3 bg-green-500 text-white font-medium"
            onClick={async (_) => {
              const { ok, error } = await updateBuyerOrderState(
                orders[idx].id,
                data?.user.jwt || "",
              );
              if (ok) {
                alert("Success!");
                router.refresh();
              } else {
                console.error(error);
              }
            }}
          >
            ได้รับสินค้าแล้ว
          </button>
        </div>
      )}
    </>
  );
}
