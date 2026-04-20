import Service from "@/service/src";
 
export function deleteClient(id: String, nif: String){

    return Service.getCases('deleteClient', {
        signal: new AbortController().signal,
        endPointData: {
            id: id,
            nif: nif
        },
        token: undefined
    })
}
