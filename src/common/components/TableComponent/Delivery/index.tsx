import { TableComponentProps } from "./interface";
import { Table } from "antd"; //-- Importamos el componente tabla que hemos extraído de ant design
import { FC } from "react";

const TableComponent: FC<TableComponentProps> = ({columns, data}) => {
    return <Table columns={columns} dataSource={data} />
};

export default TableComponent;