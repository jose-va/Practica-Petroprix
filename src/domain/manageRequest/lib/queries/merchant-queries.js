export const MERCHANT_QUERIES = {
  getMerchants: () =>
    `http://localhost:8081/api/merchant/findAll`,

  getMerchantByID:() =>
    `http://localhost:8081/api/merchant/find`,

  getMerchantByName:() =>
    `http://localhost:8081/api/merchant/findByName`,

   createMerchant:() =>
    `http://localhost:8081/api/merchant/create`,

   updateMerchant:() =>
    `http://localhost:8081/api/merchant/update`,

   deleteMerchant:() =>
    `http://localhost:8081/api/merchant/delete`,
}
