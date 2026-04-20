import Service from "@/service/src";

export function getMerchants(){

    return Service.getCases('getMerchants', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
    })
}

export function searchMerchant(input: string): Promise<any> {

    return Service.getCases('getMerchantByName', {
        signal: new AbortController().signal,
        endPointData: input,
        token: undefined 
    }) 
}
