import ClientEditComponent from "@/common/components/ClientEditComponent/Delivery";
import Service from "@/service/src";

export default async function ClientEdit({ params }: { params: Promise<{ id: string, nif: string }> }){
    const { id, nif } = await params;

    const response: any= await Service.getCases('getClientByID', {
        signal: new AbortController().signal,
        endPointData: {
            id: id,
            nif: nif,
        },
        token: undefined
    })

    return(
        <ClientEditComponent previousData={response.data}/>
    )
}