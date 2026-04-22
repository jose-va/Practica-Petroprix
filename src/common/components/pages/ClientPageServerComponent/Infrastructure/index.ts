import Service from "@/service/src";

export function getClients() {

    return Service.getCases('getClients', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
    })
}

export function getClientByID(input: string): Promise<any> {

    return Service.getCases('getClientByID', {
        signal: new AbortController().signal,
        endPointData: { id: input },
        token: undefined 
    }) 
}

export function getClientByName(input: string): Promise<any> {

    return Service.getCases('getClientByName', {
        signal: new AbortController().signal,
        endPointData: { name: input },
        token: undefined 
    }) 
}

export function getClientByEmail(input: string): Promise<any> {

    return Service.getCases('getClientByEmail', {
        signal: new AbortController().signal,
        endPointData: { email: input },
        token: undefined 
    }) 
}


export function getClientByMerchantID(input: string): Promise<any> {
    return Service.getCases('getClientByMerchantID', {
        signal: new AbortController().signal,
        endPointData: { merchantId: input },
        token: undefined 
    }) 
}

