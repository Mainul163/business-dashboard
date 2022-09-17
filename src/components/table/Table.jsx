import React,{useState} from 'react';
import './Table.css'
import { Table, Pagination } from 'antd';
const TableComponent = ({ data, columns, headerText }) => {
    const showTotal = (total) => `Total ${total} items`;
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontWeight: "bold" }}>{headerText}</h2>
            </div>
            <Table dataSource={data} columns={columns} pagination={false} />
            <div className='paginationStyle'>
                <Pagination 
                   size="small" total={50} showTotal={()=>showTotal(20)} />
            </div>

        </div>
    );
};

export default TableComponent;