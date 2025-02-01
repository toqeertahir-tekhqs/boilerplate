import { PaginationProps } from "antd";
// import { svgTableIcons } from "assets";

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return (
      <div className="flex items-center justify-center h-full">
        {/* <svgTableIcons.PreviousIcon /><> */}
        <></>
      </div>
    );
  }
  if (type === "next") {
    return (
      <div className="flex items-center justify-center h-full">
        {/* <svgTableIcons.NextIcon /> */}
        <></>
      </div>
    );
  }
  return originalElement;
};
export default itemRender;
