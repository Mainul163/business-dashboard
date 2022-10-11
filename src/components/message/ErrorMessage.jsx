
import {  message } from 'antd';
const errorMessage = (text) => {
    return (
        message.error(text)
    );
};

export default errorMessage;