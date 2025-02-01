import { CloseOutlined } from "@ant-design/icons";
import { DrawerProps as AntdDrawerProps, Drawer } from "antd";
import React from "react";

interface CustomDrawerProps
  extends Pick<AntdDrawerProps, "placement" | "width" | "extra"> {
  open: boolean;
  setOpen: (value: boolean) => void;
  title?: string;
  height?: string | number;
  children: React.ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  setOpen,
  title = "Drawer",
  placement = "right",
  width = '350px',
  height,
  extra,
  children,
}) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title={
        <span className=" text-white text-center text-[18px]">{title}</span>
      }
      onClose={onClose}
      open={open}
      width={width}
      style={{
        borderRadius: "10px 10px 0px 0px",
        backgroundColor: "#0B89CA",
        maxWidth: 480,
        margin: 'auto'

      }}
      height={height}
      placement={placement}
      extra={extra}
      closeIcon={<CloseOutlined style={{ color: "white", fontSize: "18px" }} />}
    >
      {children}
      <style>{`
        .ant-drawer .ant-drawer-header {
          background: #0B89CA !important; /* Slightly darker for contrast */
          padding: 16px;
          border-bottom: 1px solid #EFE8D7;
          position: relative;
        }

        .ant-drawer-header .ant-drawer-title {
          font-size: 18px;
          font-weight: bold;
        }

        .ant-drawer .ant-drawer-header {
          text-align: center;
        }
          .ant-drawer-close{
          position: absolute;
          right: 5px;
          }

      `}</style>
    </Drawer>
  );
};

export default CustomDrawer;
