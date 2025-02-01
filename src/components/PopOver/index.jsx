import { Popover } from 'antd';
import { useSelector } from 'react-redux';

const PopOver = ({
  content,
  title,
  placement = 'topLeft',
  children,
  width,
}) => {
  const { themeMode, colorTheme } = useSelector((state) => state?.states);
  return (
    <>
      <div>
        <Popover
          content={
            <span
              style={{
                color: themeMode === 'light' ? 'black' : '#EBE7E5',
              }}
              className=" text-sm"
            >
              {content}
            </span>
          }
          title={
            <span
              style={{
                color: themeMode === 'light' ? colorTheme : '#939BC9',
              }}
              className=" text-[13px]"
            >
              {title}
            </span>
          }
          overlayStyle={{
            maxWidth: width,
          }}
          trigger="hover"
          placement={placement}
          className=" truncate"
          overlayInnerStyle={{
            backgroundColor: themeMode === 'light' ? '#F7F7FA' : '#121212',
            lineHeight: 'normal',
          }}
          overlayClassName={`${
            themeMode === 'light' ? '' : 'popover-dark-mode'
          }`}
          // arrowContent={
          //   <div
          //     className=""
          //     style={{
          //       backgroundColor: themeMode === 'light' ? 'black' : 'black',
          //     }}
          //   />
          // }
        >
          {children}
        </Popover>
      </div>
    </>
  );
};

export default PopOver;
