import { ClientType } from "../../pages/ClientPageComponent/interface"
import { MerchantType } from "../../pages/MerchantPageComponent/interface"

export type MerchantFormComponentProps= {
    data?: MerchantType
    clients?: ClientType[]
}