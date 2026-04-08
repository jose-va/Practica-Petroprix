'use client'

import React, { Suspense, useState } from "react"
import { Space, TableProps, Tag } from "antd"
import TableComponent from "../../TableComponent/Delivery"
import { ClientType } from "./interface"
import Link from "next/link"
import { deleteClient, searchClient } from "../Infrastructure"
import { useRouter } from "next/navigation"
import { Input } from 'antd';
import TableSkeleton from "../../TableSkeleton"

const ClientPageComponent: React.FC<any> = ({initialData}) => {

    const [data, setData]= useState<ClientType[]>(initialData)
    const router = useRouter();

    const { Search } = Input;
    
    async function handleSearch(input: String){

        try{
            const response: any= await searchClient(input.trim())
            setData(response.data)
        }catch (error){
            console.error("Se ha producido un error en la búsqueda " +  error)
        }
    }

    async function handleDelete(id: String, nif: String) {
        await deleteClient(id, nif)
        setData(prev => prev.filter(item => item.id != id))
    }

    async function handleUpdate(id: String, nif: String) {
        router.push(`/client/edit/${id}/${nif}`);
    }

    const columns: TableProps<ClientType>['columns'] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'DNI',
            dataIndex: 'cifNifNie',
            key: 'cifNifNie',
        },
        {
            title: 'Estado',
            key: 'state',
            render: () => <Tag color="green">ACTIVO</Tag>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="medium">
                    <button onClick={() => handleUpdate(record.id, record.cifNifNie)}>✏️</button>
                    <button onClick={() => handleDelete(record.id, record.cifNifNie)}>❌</button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Search placeholder="Buscar por nombre..."onSearch={(input) => handleSearch(input)} className="max-w-screen"/>
                <Suspense fallback={<TableSkeleton />}>
                    <TableComponent columns={columns} data={data} />
                </Suspense>
            <Link href="/client/add" className="p-2 rounded-lg bg-cyan-600 text-white my-6">Nuevo cliente</Link>
        </div>
    );
}

export default ClientPageComponent