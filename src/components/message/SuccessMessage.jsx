import {  message } from 'antd';
const successMessage = (text) => {
    return (
        message.success(text)
    );
};

export default successMessage;