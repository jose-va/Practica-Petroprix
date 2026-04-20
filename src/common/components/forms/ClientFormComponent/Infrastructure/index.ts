import Service from "@/service/src";
import { ClientType } from "../../../pages/ClientPageComponent/interface";

export async function createClient(data: ClientType) {
    try{
        await Service.getCases('createClient', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        })

    }catch(error){
        console.error("No se ha podido agregar al cliente. ", error)
}}

export  function updateClient(data: ClientType) {
    try{
        return Service.getCases('updateClient', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        })

    }catch(error){
        console.error("No se ha podido actualizar al cliente. ", error)
}}

export  function findMerchantByName(data: ClientType) {
    try{
        return Service.getCases('findMerchantByName', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        })

    }catch(error){
        console.error("No se ha podido actualizar al cliente. ", error)
}}

  