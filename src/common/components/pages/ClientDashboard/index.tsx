'use client'

import { Input, Select, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { ReactNode, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ClientDashboard({ children }: { children: ReactNode}) {
  const { Search } = Input
  const searchParams= useSearchParams() 
  const pathName= usePathname()
  const router = useRouter()

  const currentInput = searchParams.get('input') || undefined;
  const currentMode = searchParams.get('mode') || undefined;
  
  function handleSearch(input: string, newMode: string | undefined = currentMode){
    const params= new URLSearchParams(searchParams);
    if (input){
      params.set('input', input)
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
          <Search placeholder={"Introduzca un parámetro de búsqueda..."} onSearch={(input) => handleSearch(input)} defaultValue={currentInput}/>
            <Select placeholder="Tipo de búsqueda" onChange={(value) => handleSearch(searchParams.get('input') || '', value)} value={currentMode}
              options={[
                { value: 'id', label: <span>ID del cliente</span> },
                { value: 'name', label: <span>Nombre del cliente</span> },
                { value: 'email', label: <span>Email del cliente</span> },
                { value: 'merchant', label: <span>ID del comerciante</span> },
              ]}
            />
      </div>
      <Suspense fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />} key={`${currentInput}-${currentMode}`}>
        {children}
      </Suspense>
      <Link href="/client/add" className="p-2 rounded-lg bg-cyan-600 text-white mb-4">Nuevo cliente</Link>
    </div>  
  )
}