
import ClientFormComponent from "@/common/components/forms/ClientFormComponent/Delivery";
import Service from "@/service/src";

export default async function ClientEdit({searchParams}: {searchParams: {id: string, nif: string}}){
    const {id, nif}= searchParams
    
    const response: any= await Service.getCases('getClientByID', {
        signal: new AbortController().signal,
        endPointData: {
            id: id,
            nif: nif,
        },
        token: undefined
    })

    return <ClientFormComponent data={response.data}/>
}