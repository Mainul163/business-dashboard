import React from 'react';
import { Pagination } from 'antd'
import './PaginationComponent.css'


const PaginationComponent = ({ total, current, pageSize,setPageSize,setCurrent }) => {
    return (
        <div className='paginationStyle'>
            <Pagination current={current} pageSize={pageSize} total={total} showSizeChanger={false}  
                        onChange={(page, newPageSize) => {
                        setPageSize(newPageSize);
                        setCurrent(pageSize !== newPageSize ? 1 : page);
                    }}/>
        </div>
    );
};

export default PaginationComponent;