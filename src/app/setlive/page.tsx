import { auth } from "@/auth";
import { redirect } from "next/navigation";

import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import LiveList from "@/components/LiveList";
import LiveContext from "@/components/LiveContext";
import LiveManage from "@/components/LiveManage";

import getLiveList from "../api/live/getLiveList";

export default async function SetLiveBiddingPage() {
  const session = await auth();
  if (!session || !session.user.id) redirect("/login");

  const lives = await getLiveList(session.user.id, session.user.jwt);
  return (
    <ProductWraper>
      <ProductManageHeader name="จัดการไลฟ์" href="/user" />
      <div className="flex w-full justify-evenly mt-4">
        <LiveContext>
          <LiveList lives={lives} />
          <LiveManage lives={lives} token={session.user.jwt} />
        </LiveContext>
      </div>
    </ProductWraper>
  );
}
