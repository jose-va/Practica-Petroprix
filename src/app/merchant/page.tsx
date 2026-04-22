import MerchantDashboard from "@/common/components/pages/MerchantDashboard/Delivery";
import MerchantPageServerComponent from "@/common/components/pages/MerchantPageServerComponent/Delivery";

export default async function Page({searchParams}: {searchParams: Promise<{ input?: string, mode?: string }>}) {
  const { input, mode } = await searchParams;

  return (
    <MerchantDashboard>
       <MerchantPageServerComponent input={input} mode={mode} />
    </MerchantDashboard>
  );
}