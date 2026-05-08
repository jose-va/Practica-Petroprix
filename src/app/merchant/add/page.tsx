"use client";
import MerchantFormComponent from "@/common/components/forms/MerchantFormComponent/Delivery";
import Service from "@/service/src";

export default async function MerchantForm() {
  const response: any = await Service.getCases("getClients", {
    signal: new AbortController().signal,
    endPointData: {},
    token: undefined,
  });

  return <MerchantFormComponent clients={response?.data} />;
}
