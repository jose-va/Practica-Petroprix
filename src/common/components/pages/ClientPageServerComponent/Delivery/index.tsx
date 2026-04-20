'use server'

import ClientPageComponent from "@/common/components/pages/ClientPageComponent/Delivery";
import { getClients, searchClient } from "../Infrastructure";

export default async function ClientPageServerComponent({input}:{input?:string}) {
  
  const response: any = input ? await searchClient(input) : await getClients()

  return <ClientPageComponent data={response.data}/>
}