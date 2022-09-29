import React,{useState} from 'react';
import './Table.css'
import { Table, Pagination } from 'antd';
const TableComponent = ({ data, columns, headerText }) => {
    const showTotal = (total) => `Total ${total} items`;
    const [page, setPage] = useState(1);
    const handleChange = (page) => {
      setPage(page);
     
    };
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontWeight: "bold" }}>{headerText}</h2>
            </div>
            <Table dataSource={data} columns={columns}  pagination={false}  />
            <div className='paginationStyle'>
                <Pagination 
                   size="small" total={20} showTotal={()=>showTotal(3)} />
            </div>

        </div>
    );
};

export default TableComponent;




// pagination={{
//     current: page,
//     onChange: handleChange,
//     total: data.length,
//     pageSize: 5,
//     showSizeChanger: false
//   }}