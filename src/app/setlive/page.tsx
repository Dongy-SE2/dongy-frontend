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
      <ProductManageHeader name="จัดการไลฟ์" href="/product/manage" />
      <div className="flex w-full justify-evenly mt-4">
        <LiveContext>
          <LiveList lives={lives} />
          <LiveManage lives={lives} />
        </LiveContext>
      </div>
    </ProductWraper>
  );
}

// id: 12,
//       present_price: 20,
//       state: 'public',
//       live_link: null,
//       live_name: 'this is live name',
//       createdAt: '2025-03-24T06:29:30.063Z',
//       updatedAt: '2025-03-24T06:29:30.063Z',
//       publishedAt: '2025-03-24T06:29:30.011Z',
//       documentId: 'oma7j98vfrhlwjorsywd839k',
//       locale: null,
//       scheduled_live_start_time: '2027-03-23T21:30:00.000Z',
//       scheduled_live_end_time: '2027-03-24T17:00:00.000Z',
//       latest_bid_time: '2025-03-24T06:29:30.063Z',
//       current_live_end_time_utc_string: '2025-03-24T06:30:32.063Z',
//       bidding_product: [Object]
