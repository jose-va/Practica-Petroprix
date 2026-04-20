import MerchantFormComponent from "@/common/components/forms/MerchantFormComponent/Delivery";
import Service from "@/service/src";

export default async function MerchantEdit({searchParams}: {searchParams: {id: string, address: string}}){
    const {id, address}= searchParams

    const response: any= await Service.getCases('getMerchantByID', {
        signal: new AbortController().signal,
        endPointData: {
            id: id,
            address: address, 
        },
        token: undefined
    })
    
    return <MerchantFormComponent data={response.data}/>
}