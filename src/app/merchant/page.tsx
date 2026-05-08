import MerchantPageServerComponent from "@/common/components/pages/MerchantPageServerComponent/Delivery";
import { Spin } from "antd";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default async function Page({
  searchParams,
}: {
  searchParams: { input?: string; mode?: string };
}) {
  const { input, mode } = searchParams;

  return (
    <Suspense
      fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />}
      key={input}
    >
      <MerchantPageServerComponent input={input} mode={mode} />
    </Suspense>
  );
}
