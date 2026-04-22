import React from 'react'
import MerchantPageComponent from '../../MerchantPageComponent/Delivery'
import { getByClientID, getMerchants, searchMerchant, getMerchantByID } from '../Infrastructure'

export default async function MerchantPageServerComponent({input, mode}:{input?:string, mode?:string}) {

    let response: any
    if (!input) {
        response = await getMerchants()
      } else {  
        switch (mode) {
          case 'name':
            response = await searchMerchant(input);
            break;
            
          case 'id':
            response = await getMerchantByID(input)
            break;
            
          case 'client':
            response = await getByClientID(input)
            break;
    
          default:
            response = await getMerchants()
        }
      }

    return <MerchantPageComponent data={response.data} /> 
}
