import ClientPageServerComponent from "@/common/components/pages/ClientPageServerComponent/Delivery";
import { Suspense } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

export default async function Page({
  searchParams,
}: {
  searchParams: { input?: string; mode?: string };
}) {

  const { input, mode } = searchParams;

  return (
      <Suspense fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />} key={input}>
        <ClientPageServerComponent input={input} mode={mode} />
      </Suspense>
    
  );
}
