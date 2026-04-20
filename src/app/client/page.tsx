'use client'

import ClientPageServerComponent from "@/common/components/pages/ClientPageServerComponent/Delivery";
import { Input, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function ClientDashboard({input}:{input?:string}) {

  const { Search } = Input

  const searchParams= useSearchParams() 
  const pathName= usePathname()
  const router = useRouter()
  
  function handleSearch(input: string){
    const params= new URLSearchParams(searchParams);

    if (input){
      params.set('input', input)
    }else{
      params.delete('input')
    } 

    router.replace(`${pathName}?${params.toString()}`)
  }
  
  return (
    <div className="dashboard-container">
      <Search placeholder="Buscar por nombre..." onSearch={(input) => handleSearch(input)} className="max-w-screen" defaultValue={searchParams.get('input')?.toString()}/>
      <Suspense fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />} key={input}>
        <ClientPageServerComponent input={input} />
      </Suspense>
      <Link href="/merchant/add" className="p-2 rounded-lg bg-cyan-600 text-white mb-4">Nuevo comerciante</Link>
    </div>  
  )
}