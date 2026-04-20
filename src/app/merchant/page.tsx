'use client'

import MerchantPageServerComponent from "@/common/components/pages/MerchantPageServerComponent/Delivery";
import { Input, Spin } from "antd";
import { Suspense } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MerchantDashboard({input}:{input?:string}) {

    const { Search } = Input
    
    const searchParams= useSearchParams()
    const pathName= usePathname()
    const router = useRouter()
    
    async function handleSearch(input: String){
        const params= new URLSearchParams(searchParams)

        if (input){
            params.set('input', input.toString())
        }else{
            params.delete('input')
        }

        router.replace(`${pathName}?${params.toString()}`)
    }

    
    return (
        <div className="dashboard-container">
            <Search placeholder="Buscar por nombre..." onSearch={(input) => handleSearch(input)} className="max-w-screen"/> 
            <Suspense fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />} key={input}>
                <MerchantPageServerComponent input={input} />
            </Suspense> 
            <Link href="/merchant/add" className="p-2 rounded-lg bg-cyan-600 text-white mb-4">Nuevo comerciante</Link>
        </div>
    )
}