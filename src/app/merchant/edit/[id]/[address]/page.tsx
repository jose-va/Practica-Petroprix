import MerchantEditComponent from "@/common/components/MerchantEditComponent/Delivery";
import Service from "@/service/src";

export default async function MerchantEdit({ params }: { params: Promise<{ id: string, address: string }> }){
    const { id, address } = await params;
    const response: any= await Service.getCases('getMerchantByID', {
        signal: new AbortController().signal,
        endPointData: {
            id: id,
            // Me he dado cuenta de que extraer parámetros de la ruta los codifica automáticamente y me produce errores
            // En nuestro manageRequest ya codificamos. Utilizo decodeURIComponent para decodificar la dirección antes de enviarsela al servicio.
            address: decodeURIComponent(address), 
        },
        token: undefined
    })
    
    return(
        <MerchantEditComponent previousData={response.data}/>
    )
}