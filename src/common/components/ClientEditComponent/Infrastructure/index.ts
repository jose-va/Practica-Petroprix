import Service from "@/service/src";
import { ClientType } from "../../ClientPageComponent/Delivery/interface";

export async function updateClient(data: ClientType) {
    try{
        return await Service.getCases('updateClient', {
            signal: new AbortController().signal, 
            endPointData: data,
            token: undefined
        });

    }catch(error){
        console.error("No se ha podido actualizar al cliente. ", error)
}};
