'use server'

import React from 'react'
import MerchantPageComponent from '../../MerchantPageComponent/Delivery'
import { getMerchants, searchMerchant } from '../Infrastructure'

export default async function MerchantPageServerComponent({input}:{input?:string}) {

    const response: any= input ? await searchMerchant(input) : await getMerchants()

    return <MerchantPageComponent data={response.data} /> 
}
