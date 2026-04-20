'use client'

import { FC } from "react"
import { notification, Space, TableProps, Tag } from "antd"
import TableComponent from "../../../TableComponent"
import { MerchantPageComponentProps, MerchantType } from "../interface"
import Link from "next/link"
import { deleteMerchant} from "../Infrastructure"

const MerchantPageComponent: FC<MerchantPageComponentProps> = ({data}) => {

    async function handleDelete(id: String, nif: String) {
        try{
            await deleteMerchant(id, nif)
        }catch(error){
            notification.error({
                message: 'ERROR: ' + error,
                description: 'No se pudo borrar al cliente',
                placement: 'topRight',
            })
        }
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
                    <Link href={`/merchant/edit?id=${record.id}&address=${record.address}`}>✏️</Link>
                    <button onClick={() => handleDelete(record.id, record.address)}>❌</button>
                </Space>
            ),
        },
    ]

    return <TableComponent columns={columns} data={data} />
}

export default MerchantPageComponent