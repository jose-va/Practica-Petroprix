import manageRequest from '@/domain/manageRequest';

const merchantUseCases = {

    createMerchant: (signal, values, token) => {

    const header = {'Content-Type': 'application/json'} 
    return manageRequest(
      signal,
      'createMerchant',
      values,
      'body',
      'normal',
      'post',
      token,
      undefined,
      header
    )
  },

  updateMerchant: (signal, values, token) => {

    const header = {'Content-Type': 'application/json'} 
    return manageRequest(
      signal,
      'updateMerchant',
      values,
      'body',
      'normal',
      'put',
      token,
      undefined,
      header
    )
  },

  deleteMerchant: (signal, values, token) => {

    return manageRequest(
      signal,
      'deleteMerchant',
      values,
      'url',
      'normal',
      'delete',
      token,
      undefined,
    )
  },
  
  getMerchants: (signal, values, token) => {

    return manageRequest(
      signal,
      'getMerchants',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getMerchantByClientID: (signal, values, token) => {

    return manageRequest(
      signal,
      'getMerchantByClientID',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getMerchantByID: (signal, values, token) => {

    return manageRequest(
      signal,
      'getMerchantByID',
      values,
      'url',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getMerchantByName: (signal, values, token) => {

    return manageRequest(
      signal,
      'getMerchantByName',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  }
}

export default merchantUseCases;