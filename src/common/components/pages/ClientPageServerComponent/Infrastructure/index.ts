import Service from "@/service/src";

export function getClients() {

    return Service.getCases('getClients', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
    })
}

export function searchClient(input: string): Promise<any> {

    return Service.getCases('getClientByName', {
        signal: new AbortController().signal,
        endPointData: input,
        token: undefined 
    }) 
}

