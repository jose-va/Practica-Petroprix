"use client";

import { FC } from "react";
import { notification, Space, TableProps, Tag } from "antd";
import TableComponent from "../../../ui/TableComponent";
import { MerchantPageComponentProps, MerchantType } from "../interface";
import Link from "next/link";
import { deleteMerchant } from "../Infrastructure";
import SearchComponent from "@/common/components/ui/SearchComponent/Delivery";

const MerchantPageComponent: FC<MerchantPageComponentProps> = ({ data }) => {
  async function handleDelete(id: String, nif: String) {
    try {
      await deleteMerchant(id, nif);
    } catch (error) {
      notification.error({
        message: "ERROR: " + error,
        description: "No se pudo borrar al cliente",
        placement: "topRight",
      });
    }
  }

  const columns: TableProps<MerchantType>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Comercio",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Direccion",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tipo",
      dataIndex: "merchantType",
      key: "merchantType",
    },
    {
      title: "Cliente",
      dataIndex: "clientId",
      key: "clientId",
    },
    {
      title: "Estado",
      key: "state",
      render: () => <Tag color="green">OPERATIVO</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="medium">
          <Link href={`/merchant/edit?id=${record.id}`}>✏️</Link>
          <button onClick={() => handleDelete(record.id, record.address)}>
            ❌
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="dashboard-container p-4">
      <div className="flex flex-col gap-4 mb-6">
        <SearchComponent searchType="merchant"/>
        <TableComponent columns={columns} data={data} />
      </div>
      <Link
        href="/merchant/add"
        className="p-2 rounded-lg bg-cyan-600 text-white mb-4"
      >
        Nuevo comerciante
      </Link>
    </div>
  );
};

export default MerchantPageComponent;
