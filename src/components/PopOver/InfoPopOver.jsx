import { Popover } from 'antd';
import './infoPopOver.css';

const InfoPopover = ({
  children,
  title = '',
  trigger = 'hover',
  content = '',
}) => (
  <Popover
    overlayClassName="infoPopover"
    content={content}
    title={title}
    trigger={trigger}
  >
    {children}
  </Popover>
);

export default InfoPopover;
