import ProductManageHeader from "@/components/ProductManageHeader";
import ProductWraper from "@/components/ProductWraper";
import LiveList from "@/components/LiveList";
import LiveContext from "@/components/LiveContext";
import getLive from "../api/live/getLive";
import LiveManage from "@/components/LiveManage";

export default async function SetLiveBiddingPage() {
  const lives = await getLive("");
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
