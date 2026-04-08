'use client'

import { FC, useState } from "react"
import { Space, TableProps, Tag } from "antd"
import TableComponent from "../../TableComponent/Delivery"
import { MerchantType } from "../interface"
import Link from "next/link"
import { deleteMerchant, searchMerchant } from "../Infrastructure"
import { useRouter } from "next/navigation"
import { Input } from 'antd';

const MerchantPageComponent: FC<any> = ({initialData}) => {

    const [data, setData]= useState<MerchantType[]>(initialData)
    const router = useRouter();
    const Search = Input.Search;

    async function handleSearch(input: String){
        const response: any= await searchMerchant(input)
        setData(response.data)
    }

    async function handleDelete(id: String, nif: String) {
        await deleteMerchant(id, nif)
        setData(prev => prev.filter(item => item.id != id))
    }

    async function handleUpdate(id: String, address: String) {
        router.push(`/merchant/edit/${id}/${address}`);
    }

    const columns: TableProps<MerchantType>['columns'] = [
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
            title: 'Direccion',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tipo',
            dataIndex: 'merchantType',
            key: 'merchantType',
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
                    <button onClick={() => handleUpdate(record.id, record.address)}>✏️</button>
                    <button onClick={() => handleDelete(record.id, record.address)}>❌</button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Search placeholder="Buscar por nombre..." onSearch={(input) => handleSearch(input)} className="max-w-screen"/> 
            <TableComponent columns={columns} data={data} />
            <Link href="/merchant/add" className="p-2 rounded-lg bg-cyan-600 text-white mb-4">Nuevo comerciante</Link>
        </div>
    );
}

export default MerchantPageComponent