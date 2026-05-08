import ClientPageComponent from "@/common/components/pages/ClientPageComponent/Delivery";
import {
  getClientByEmail,
  getClientByID,
  getClientByName,
  getClients,
  getClientByMerchantID,
} from "../Infrastructure";

export default async function ClientPageServerComponent({
  input,
  mode,
}: {
  input?: string;
  mode?: string;
}) {
  let response: any;

  if (!input) {
    response = await getClients();
  } else {
    switch (mode) {
      case "id":
        response = await getClientByID(input);
        break;
      case "email":
        response = await getClientByEmail(input);
        break;
      case "merchant":
        response = await getClientByMerchantID(input);
        break;
      case "name":
        response = await getClientByName(input);
        break;
      default:
        response = await getClients();
    }
  }

  return (
    <>
      <ClientPageComponent data={response.data} />
    </>
  )
}
