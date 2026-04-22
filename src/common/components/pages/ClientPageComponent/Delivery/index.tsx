'use client'

import { FC } from "react"
import { Space, TableProps, Tag } from "antd"
import { notification } from 'antd';
import TableComponent from "../../../TableComponent"
import { ClientPageComponentProps, ClientType } from "../interface"
import Link from "next/link"
import { deleteClient} from "../Infrastructure"

const ClientPageComponent: FC<ClientPageComponentProps> = ({data}) => {

    async function handleDelete(id: String, cifNifNie: String) {
        try{
            await deleteClient(id, cifNifNie)
        }catch(error){
            notification.error({
                message: 'ERROR: ' + error,
                description: 'No se pudo borrar al cliente',
                placement: 'topRight',
            })
        }
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
            title: 'Apellido',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Teléfono',
            dataIndex: 'phone',
            key: 'phone',
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
            title: 'Comercios',
            key: 'merchants',
            render: (_, record) => (
                <Link href={`/merchant?input=${record.id}&mode=client`}>Comercios</Link>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <Space size="medium">
                        <Link href={`/client/edit?id=${record.id}`}>✏️</Link>
                        <button onClick={() => handleDelete(record.id, record.cifNifNie)}>❌</button>
                    </Space>
                )
            }     
        }
    ]

    return <TableComponent columns={columns} data={data} /> 
}

export default ClientPageComponent