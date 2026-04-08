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
      'query',
      'normal',
      'DELETE',
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
      'query',
      'normal',
      'get',
      token,
      undefined,
    )
  },

  getClientByEmail: (signal, values, token) => {

    const header = {'Content-Type': 'application/json'} 
    return manageRequest(
      signal,
      'getClientByEmail',
      values,
      'url',
      'normal',
      'get',
      token,
      undefined,
      header
    )
  },

  getClientByName: (signal, values, token) => {

    const header = {'Content-Type': 'application/json'} 
    return manageRequest(
      signal,
      'getClientByName',
      values,
      'url',
      'normal',
      'get',
      token,
      undefined,
      header
    )
  },
}

export default clientUseCases;
