import { TableComponentProps } from "./interface";
import { Table } from "antd"; 
import { FC } from "react";

const TableComponent: FC<TableComponentProps> = ({columns, data}) => {
    return <Table columns={columns} dataSource={data} />
};

export default TableComponent;