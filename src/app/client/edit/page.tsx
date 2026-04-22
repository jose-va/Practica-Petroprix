import ClientFormComponent from "@/common/components/forms/ClientFormComponent/Delivery";
import Service from "@/service/src";

export default async function ClientEdit({searchParams}: {searchParams: {id: String}}){
    const {id}= searchParams
    
    const response: any= await Service.getCases('getClientByID', {
        signal: new AbortController().signal,
        endPointData: {
            id: id
        },
        token: undefined
    })

    return <ClientFormComponent data={response.data} />
}