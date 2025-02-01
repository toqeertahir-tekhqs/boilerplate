import { Table as AntDTable } from 'antd';
import { useMemo } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import './style.css';

const Table = ({
  data,
  columns,
  pageNumber,
  rowsPerPage,
  totalRecord,
  setTotalRecord,
  setPageNumber,
  setRowsPerPage,
  setSortOrder,
  setFilters,
  loading,
}) => {
  const { themeMode, colorTheme } = useSelector((state) => state?.states);

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <div className="flex items-center justify-center h-full">
          <SlArrowLeft
            className="w-[12px] h-[12px]"
            style={{
              color: themeMode === 'light' ? colorTheme : '#9FA8DA',
            }}
          />
        </div>
      );
    }
    if (type === 'next') {
      return (
        <div className="flex items-center justify-center h-full">
          <SlArrowRight
            className="w-[12px] h-[12px]"
            style={{
              color: themeMode === 'light' ? colorTheme : '#9FA8DA',
            }}
          />
        </div>
      );
    }
    return originalElement;
  };

  const onChange = (pagination, filters, sorter, extra) => {
    setPageNumber(pagination.current);
    setRowsPerPage(pagination.pageSize);
    setSortOrder(sorter);
    setFilters(filters);
  };
  const pageSizeOptions = useMemo(() => {
    const options = [];
    const maxPageSize = Math.ceil(totalRecord / 10) * 10;
    for (let i = 10; i <= maxPageSize; i += 10) {
      options.push(i.toString());
    }
    return options;
  }, [totalRecord]);
  return (
    <>
      <div className="mt-20">
        <AntDTable
          columns={columns}
          dataSource={data}
          className={`${themeMode === 'light' ? 'light-table' : 'dark-table'} `}
          onChange={onChange}
          size="small"
          // rowClassName={(record, index) =>
          //   index % 2 === 0
          //     ? 'bg-[#f7f7fa] text-black !border-[#CED4DA] !border-[1px]'
          //     : ''
          // }
          // bordered
          scroll={{ x: true }}
          pagination={{
            current: pageNumber,
            pageSize: rowsPerPage,
            total: totalRecord,
            showSizeChanger: true,
            // showQuickJumper:true,
            hideOnSinglePage: totalRecord > 10 ? false : true,
            size: 'small',
            // position: ['bottomCenter'],
            align: 'end',
            responsive: true,
            pageSizeOptions: pageSizeOptions,
            onShowSizeChange: (current, size) => {
              setRowsPerPage(size);
              setPageNumber(1);
            },
            itemRender: itemRender,
            style: {
              fill: themeMode === 'light' ? colorTheme : '#9FA8DA',
              color: themeMode === 'light' ? colorTheme : '#9FA8DA', // Set the text color dynamically
            },
            className:
              themeMode === 'light' ? 'light-pagination' : 'dark-pagination',
          }}
          loading={loading}
          // locale={{
          //   emptyText: <div className="custom-no-data m-0 p-0 w-0">No Data </div>,
          // }}
        />
      </div>
    </>
  );
};

export default Table;
