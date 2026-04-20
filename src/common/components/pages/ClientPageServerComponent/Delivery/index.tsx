'use server'

import ClientPageComponent from "@/common/components/pages/ClientPageComponent/Delivery";
import { getClients, searchClient, searchByMerchant } from "../Infrastructure";

export default async function ClientPageServerComponent({input, mode}:{input?:string, mode?:string}) {
  
  const response: any = input ? (mode == 'client' ? await searchClient(input) : await searchByMerchant(input)) : await getClients()

  return (
  <ClientPageComponent data={response.data}/>
  )
}