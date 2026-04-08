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

    return manageRequest(
      signal,
      'updateMerchant',
      values,
      'body',
      'normal',
      'put',
      token,
      undefined,
    )
  },

  deleteMerchant: (signal, values, token) => {

    return manageRequest(
      signal,
      'deleteMerchant',
      values,
      'query',
      'normal',
      'DELETE',
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

  getMerchantByID: (signal, values, token) => {

    return manageRequest(
      signal,
      'getMerchantByID',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getMerchantByName: (signal, values, token) => {

    const header = {'Content-Type': 'application/json'} 
    return manageRequest(
      signal,
      'getMerchantByName',
      values,
      'url',
      'normal',
      'get',
      token,
      undefined,
      header
    )
  }
}

export default merchantUseCases;