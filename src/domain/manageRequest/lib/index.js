import { CLIENT_METHODS } from "./methods/client-methods";
import { MERCHANT_METHODS } from "./methods/merchant-methods"

import { MERCHANT_QUERIES } from "./queries/merchant-queries";
import { CLIENT_QUERIES } from "./queries/client-queries";

/********************************************************************************************
 * Librería de todos los errores, queries y métodos de gestión de datos de las llamadas a API
 * *****************************************************************************************/

export const QUERIES = {
  ...CLIENT_QUERIES,
  ...MERCHANT_QUERIES,
}

export const METHODS = {
  ...CLIENT_METHODS,
  ...MERCHANT_METHODS,
}

