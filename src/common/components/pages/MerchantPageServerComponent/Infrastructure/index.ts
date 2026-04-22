import Service from "@/service/src";

export function getMerchants(){

    return Service.getCases('getMerchants', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
    })
}

export function searchMerchant(input: string){

    return Service.getCases('getMerchantByName', {
        signal: new AbortController().signal,
        endPointData: { name: input },
        token: undefined 
    }) 
}

export function getMerchantByID(input: string){

    return Service.getCases('getMerchantByID', {
        signal: new AbortController().signal,
        endPointData: { id: input },
        token: undefined 
    }) 
}


export function getByClientID(input: string){

    return Service.getCases('getMerchantByClientID', {
        signal: new AbortController().signal,
        endPointData: { clientId: input },
        token: undefined 
    }) 
}
