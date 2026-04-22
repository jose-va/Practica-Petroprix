import ClientDashboard from "@/common/components/pages/ClientDashboard";
import ClientPageServerComponent from "@/common/components/pages/ClientPageServerComponent/Delivery";

export default async function Page({searchParams}: {searchParams: Promise<{ input?: string, mode?: string }>}) {
  const { input, mode } = await searchParams;

  return (
    <ClientDashboard>
       <ClientPageServerComponent input={input} mode={mode} />
    </ClientDashboard>
  );
}