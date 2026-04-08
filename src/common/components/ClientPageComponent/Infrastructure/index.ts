import Service from "@/service/src";

export async function searchClient(input: String){

    if (input){
        return await Service.getCases('getClientByName', {
        signal: new AbortController().signal,
        endPointData: input,
        token: undefined 
    })
    }else{
        return await Service.getCases('getClients', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
    })
    }
}
    
export async function deleteClient(id: String, nif: String){

    await Service.getCases('deleteClient', {
        signal: new AbortController().signal,
        endPointData: {
            id: id,
            nif: nif
        },
        token: undefined
    })
}
