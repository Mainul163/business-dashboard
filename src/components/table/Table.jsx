import React from 'react';
import './Table.css'
import { Table } from 'antd';
const TableComponent = ({data,columns}) => {
    return (
        <div>
           <div style={{textAlign:'center',marginBottom:'30px'}}>
           <h2 style={{ fontWeight: "bold" }}> Order Analytics Table</h2>
           </div>
         <Table dataSource={data} columns={columns}/>
        </div>
    );
};

export default TableComponent;