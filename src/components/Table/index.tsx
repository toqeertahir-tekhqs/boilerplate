/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntDTable, Button } from "antd";
import { useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./style.less";

const Table = ({
  data,
  columns,
  pageNumber,
  rowsPerPage,
  totalRecord,
  setPageNumber,
  // setRowsPerPage,
  setSortOrder,
  loading,
}: any) => {
  const [scrolltoLeft, setScrolltoLeft] = useState<boolean>(false);
  const [scrolltoRight, setScrolltoRight] = useState<boolean>(true);
  const scrollContainerRef: any = useRef(null);

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      setScrolltoRight((prev) => !prev);
      setScrolltoLeft((prev) => !prev);
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      setScrolltoRight((prev) => !prev);
      setScrolltoLeft((prev) => !prev);
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const itemRender = (_: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return (
        <div className="flex items-center justify-center h-full">
          <Button type='default' >Previous</Button>
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className="flex items-center justify-center h-full">
          <Button type='default' >Next</Button>
        </div>
      );
    }
    return originalElement;
  };

  const onChange = (pagination: any, filters: any, sorter: any) => {
    setPageNumber(pagination.current);
    // setRowsPerPage(pagination.pageSize);
    setSortOrder(sorter);
  };

  function generateArrayObjects(number: number) {
    const result = [];
    for (let i = 1; i <= number; i++) {
      result.push({ key: `${i}` });
    }
    return result;
  }
  return (
    <>
      <div className=" relative">
        <div
          ref={scrollContainerRef}
          className="relative"
          style={{
            width: "100%",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              display: "inline-block",
              minWidth: "100%",
              height: "100%",
            }}
          >
            <div className="">
              <AntDTable
                columns={columns}
                dataSource={loading ? generateArrayObjects(9) : data}
                size="small"
                onChange={onChange}
                scroll={{ x: true }}
                pagination={{
                  current: pageNumber,
                  pageSize: rowsPerPage,
                  total: totalRecord,
                  showTotal: (total, range) => (<>Page {total} of {total}</>),
                  showSizeChanger: false,
                  hideOnSinglePage: totalRecord > 10 ? false : true,
                  size: "default",
                  showTitle: false,
                  position: ['bottomLeft'],
                  // align: "center",
                  responsive: true,
                  showLessItems: true,
                  onShowSizeChange: () => {
                    // setRowsPerPage(size);
                    setPageNumber(1);
                  },
                  itemRender: itemRender,
                  style: {
                    fill: "#344054",
                    color: "#344054",
                    marginLeft: '12px',
                    marginRight: '12px'
                  },
                  className: "pagination",
                }}
              />
            </div>
          </div >
        </div >
        {scrolltoLeft && (
          <div
            className="sm:hidden block absolute top-[50%] left-0 cursor-pointer text-black bg-[#344054] rounded-[100%] flex justify-center items-center w-[20px] h-[20px] animate-pulse"
            onClick={scrollToLeft}
          >
            <SlArrowLeft
              style={{
                fontSize: "10px",
              }}
            />
          </div>
        )}
        {
          scrolltoRight && (
            <div
              className="sm:hidden block absolute top-[50%] right-0 cursor-pointer text-black bg-[#344054] rounded-[100%] flex justify-center items-center w-[20px] h-[20px] animate-pulse"
              onClick={scrollToRight}
            >
              <SlArrowRight
                style={{
                  fontSize: "10px",
                }}
              />
            </div>
          )
        }
      </div >
    </>
  );
};

export default Table;
