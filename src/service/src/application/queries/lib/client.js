import manageRequest from '@/domain/manageRequest';

const clientUseCases = {
  
  createClient: (signal, values, token) => {

    const header = {'Content-Type': 'application/json'} 
    return manageRequest(
      signal,
      'createClient',
      values,
      'body',
      'normal',
      'post',
      token,
      undefined,
      header
    )
  },

  updateClient: (signal, values, token) => {

    const header = {'Content-Type': 'application/json'} 
    return manageRequest(
      signal,
      'updateClient',
      values,
      'body',
      'normal',
      'put',
      token,
      undefined,
      header
    )
  },

  deleteClient: (signal, values, token) => {

    return manageRequest(
      signal,
      'deleteClient',
      values,
      'url',
      'normal',
      'delete',
      token,
      undefined,
    )
  },

  getClients: (signal, values, token) => {

    return manageRequest(
      signal,
      'getClients',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getClientByID: (signal, values, token) => {

    return manageRequest(
      signal,
      'getClientByID',
      values,
      'url',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getClientByEmail: (signal, values, token) => {

    return manageRequest(
      signal,
      'getClientByEmail',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getClientByName: (signal, values, token) => {

    return manageRequest(
      signal,
      'getClientByName',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getClientByMerchantID: (signal, values, token) => {

    return manageRequest(
      signal,
      'getClientByMerchantID',
      values,
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  }
}

export default clientUseCases;
