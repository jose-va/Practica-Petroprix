'use client'

import { Input, Select, Spin } from "antd";
import { Suspense } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MerchantDashboard({ children }: { children: React.ReactNode }) {

    const { Search } = Input
    const searchParams= useSearchParams()
    const pathName= usePathname()
    const router = useRouter()

    const currentInput = searchParams.get('input') || "";
    const currentMode = searchParams.get('mode') || undefined;
    
    function handleSearch(input: String, newMode: string | undefined = currentMode){
        const params= new URLSearchParams(searchParams)

        if (input){
            params.set('input', input.toString())
        }else{
            params.delete('input')
        }

        if (newMode) {
            params.set('mode', newMode);
        } else {
            params.delete('mode');
        }
        router.replace(`${pathName}?${params.toString()}`)
    }

    return (
        <div className="dashboard-container p-4">
            <div className="flex flex-col gap-4 mb-6">
                <Search placeholder={"Introduzca un parámetro de búsqueda..."} onSearch={(input) => handleSearch(input)} defaultValue={currentInput} className="w-full"/>
                <Select placeholder="Tipo de búsqueda" onChange={(value) => handleSearch(searchParams.get('input') || '', value)} value={currentMode}
                    options={[
                        { value: 'id', label: <span>ID del comercio</span> },
                        { value: 'name', label: <span>Nombre del comercio</span> },
                        { value: 'client', label: <span>ID de cliente</span> },
                    ]}
                />
            </div>
            <Suspense fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />}>
                {children}
            </Suspense> 
            <Link href="/merchant/add" className="p-2 rounded-lg bg-cyan-600 text-white mb-4">Nuevo comerciante</Link>
        </div>
    )
}