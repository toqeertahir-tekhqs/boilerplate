import { message } from 'antd';

const Toast = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (type, contextMessage) => {
    messageApi.open({
      type: type,
      content: contextMessage,
    });
  };

  return { contextHolder, showMessage };
};

export default Toast;
