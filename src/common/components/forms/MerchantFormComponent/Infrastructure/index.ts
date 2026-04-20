import Service from "@/service/src";
import { MerchantType } from "../../../pages/MerchantPageComponent/interface";

export async function createMerchant(data: MerchantType) {
    try{
        await Service.getCases('createMerchant', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        })

    }catch(error){
        console.error("No se ha podido agregar al comerciante. ", error)
}}

export async function updateMerchant(data: MerchantType) {
    try{
        return await Service.getCases('updateMerchant', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        })

    }catch(error){
        console.error("No se ha podido actualizar al comerciante. ", error)
}}
