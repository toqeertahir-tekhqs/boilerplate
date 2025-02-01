import { Modal } from 'antd';


type Props = {
  title: string;
  body: () => JSX.Element;
  onCancel: (val: boolean) => void;
  onSubmit: () => void;
  width?: number;
  okText?: string;
  cancelButtonProps?: object | undefined;
  okButtonProps?: object | undefined;
};

const ModelGeneric = ({ title, body, onCancel, onSubmit, width = 520, okText }: Props) => (
  <Modal
    className="modal-generic"
    title={title}
    open
    onCancel={() => onCancel(false)}
    footer={null}
    centered
    width={width}
    closeIcon={
      <div>
        <></>
      </div>
    }
    onOk={() => onSubmit()}
    okText={okText}>
    {body()}
  </Modal>
);

export default ModelGeneric;
