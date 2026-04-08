import Service from "@/service/src";
import { MerchantType } from "../../MerchantPageComponent/interface";

export async function updateMerchant(data: MerchantType) {
    try{
        return await Service.getCases('updateMerchant', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        });

    }catch(error){
        console.error("No se ha podido actualizar al comerciante. ", error)
}};
