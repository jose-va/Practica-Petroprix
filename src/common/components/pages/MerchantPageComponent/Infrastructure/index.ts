import Service from "@/service/src";
import { MerchantType } from "../interface";

export async function searchMerchant(input: String){

    if (input){
        return await Service.getCases('getMerchantByName', {
        signal: new AbortController().signal,
        endPointData: input,
        token: undefined
        })
    }else{
        return await Service.getCases('getMerchants', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
        })
    }
}

export async function deleteMerchant(id: String, address: String){
    
    return await Service.getCases('deleteMerchant', {
        signal: new AbortController().signal,
        endPointData: {
            id: id,
            address: address
        },
        token: undefined
    })
}