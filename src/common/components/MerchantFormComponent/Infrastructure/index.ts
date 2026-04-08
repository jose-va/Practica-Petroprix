import Service from "@/service/src";
import { MerchantType } from "../../MerchantPageComponent/interface";

export async function createMerchant(data: MerchantType) {
    try{
        await Service.getCases('createMerchant', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        });

    }catch(error){
        console.error("No se ha podido agregar al comerciante. ", error)
}};
