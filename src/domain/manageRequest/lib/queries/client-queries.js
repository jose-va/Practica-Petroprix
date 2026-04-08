export const CLIENT_QUERIES = {
  getClients: () =>
    `http://localhost:8080/api/client/findAll`,

  getClientByID: () =>
    `http://localhost:8080/api/client/find`,

  getClientByName:() =>
    `http://localhost:8080/api/client/findByName`,
  
   getClientByEmail:() =>
    `http://localhost:8080/api/client/findByEmail`,

   createClient:() =>
    `http://localhost:8080/api/client/create`,

   updateClient:() =>
    `http://localhost:8080/api/client/update`,

   deleteClient:() =>
    `http://localhost:8080/api/client/delete`,
}

