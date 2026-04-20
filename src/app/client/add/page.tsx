import ClientFormComponent from "@/common/components/forms/ClientFormComponent/Delivery";
import Service from "@/service/src";

export default async function ClientForm() {

  const response: any= await Service.getCases('getMerchants', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
    })

  return (
      <ClientFormComponent merchants={response.data}/>
  )
}
