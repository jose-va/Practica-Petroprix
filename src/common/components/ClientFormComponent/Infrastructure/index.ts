import Service from "@/service/src";
import { ClientType } from "../../ClientPageComponent/Delivery/interface";

export async function createClient(data: ClientType) {
    try{
        await Service.getCases('createClient', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        });

    }catch(error){
        console.error("No se ha podido agregar al cliente. ", error)
}};

  