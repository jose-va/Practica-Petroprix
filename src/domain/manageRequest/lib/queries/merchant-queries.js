export const MERCHANT_QUERIES = {
  getMerchants: () =>
    `http://localhost:8081/api/merchant/all`,

  getMerchantByID:() =>
    `http://localhost:8081/api/merchant/find`,

  getMerchantByName:() =>
    `http://localhost:8081/api/merchant/search/name`,

  getMerchantByClientID:() =>
    `http://localhost:8081/api/merchant/search/client`,

   createMerchant:() =>
    `http://localhost:8081/api/merchant/create`,

   updateMerchant:() =>
    `http://localhost:8081/api/merchant/update`,

   deleteMerchant:() =>
    `http://localhost:8081/api/merchant/delete`,
}
