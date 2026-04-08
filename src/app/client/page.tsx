import ClientPageComponent from "@/common/components/ClientPageComponent/Delivery";
import Service from "@/service/src";

export default async function ClientPage() {
    
  const response: any= await Service.getCases('getClients', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
  })

  return (
    <div className="dashboard-container">
      <ClientPageComponent initialData={response.data}/>
    </div>
  );
}