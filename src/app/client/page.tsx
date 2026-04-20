'use client'

import ClientPageServerComponent from "@/common/components/pages/ClientPageServerComponent/Delivery";
import { Button, Input, Space, Spin } from "antd";
import { LoadingOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Suspense, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function ClientDashboard({ input, mode }: { input?: string, mode?: string }) {

  const { Search } = Input
  const searchParams= useSearchParams() 
  const pathName= usePathname()
  const router = useRouter()

  const currentMode = searchParams.get('mode') || 'client';
  
  function handleSearch(input: string, newMode: string = currentMode){
    const params= new URLSearchParams(searchParams);
    if (input){
      params.set('input', input)
      params.set('mode', newMode);
    }else{
      params.delete('input')
      params.delete('mode')
    } 
    router.replace(`${pathName}?${params.toString()}`)
  }
  
  return (
    <div className="dashboard-container p-4">
      <div className="flex flex-col gap-4 mb-6">
        <Space.Compact className="w-full">
          <Button type={currentMode === 'client' ? 'primary' : 'default'} onClick={() => handleSearch(searchParams.get('input') || '', 'client')} icon={<UserOutlined />}>
            Cliente
          </Button>
          <Button type={currentMode === 'merchant' ? 'primary' : 'default'} onClick={() => handleSearch(searchParams.get('input') || '', 'merchant')} icon={<ShopOutlined />}>
            Comerciante
          </Button>
          <Search placeholder={`Buscar por nombre...`} onSearch={(value) => handleSearch(value)} defaultValue={input} className="w-full"/>
        </Space.Compact>
      </div>
      <Suspense fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />} key={`${input}-${currentMode}`}>
        <ClientPageServerComponent input={input} mode={currentMode} />
      </Suspense>
      <Link href="/merchant/add" className="p-2 rounded-lg bg-cyan-600 text-white mb-4">Nuevo comerciante</Link>
    </div>  
  )
}