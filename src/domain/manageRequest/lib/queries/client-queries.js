export const CLIENT_QUERIES = {
  getClients: () =>
    `http://localhost:8080/api/client/all`,

  getClientByID: () =>
    `http://localhost:8080/api/client/find`,

  getClientByName:() =>
    `http://localhost:8080/api/client/search/name`,
  
   getClientByEmail:() =>
    `http://localhost:8080/api/client/search/email`,

   getClientByMerchantID:() =>
    `http://localhost:8080/api/client/search/merchant`,

   createClient:() =>
    `http://localhost:8080/api/client/create`,

   updateClient:() =>
    `http://localhost:8080/api/client/update`,

   deleteClient:() =>
    `http://localhost:8080/api/client/delete`,
}

