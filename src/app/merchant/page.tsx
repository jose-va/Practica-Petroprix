import MerchantPageComponent from "@/common/components/MerchantPageComponent/Delivery";
import Service from "@/service/src";

export default async function MerchantPage() {

    const response: any= await Service.getCases('getMerchants', {
        signal: new AbortController().signal,
        endPointData: {},
        token: undefined
    });

    return (
        <div className="dashboard-container">
            <MerchantPageComponent initialData={response.data} />
        </div>
    )
}