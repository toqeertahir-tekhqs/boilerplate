import React, { useState } from 'react';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';

const SelectField = ({
  id,
  label,
  name,
  value,
  disabled,
  onChange,
  onBlur,
  placeholder='Please Select',
  required,
  error,
  errorMessage,
  options,
  mode,
  showSearch,
  allowClear,
  loading,
  ...rest
}) => {
  const { themeMode, colorTheme } = useSelector((state) => state?.states);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleIconClick = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <div>
        <div className="flex items-end space-x-1 mb-[5px] h-[25px]">
          {label && (
            <label
              className={`text-[14px] font-med`}
              style={{
                color: themeMode === 'light' ? '#000000' : '#9F9B93',
              }}
            >
              {label}
            </label>
          )}
          {required && <span className="text-[#FF1F25]">*</span>}
        </div>
        <div className="">
          <Select
            id={id}
            name={name}
            value={value}
            suffixIcon={
              <DownOutlined
                onClick={handleIconClick}
                style={{
                  color: themeMode === 'light' ? colorTheme : '#939BC9',
                  cursor: 'pointer',
                }}
              />
            }
            size="large"
            loading={loading}
            allowClear={allowClear}
            showSearch={showSearch}
            optionFilterProp="label"
            mode={mode}
            className={`!w-[100%]`}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            options={options}
            status={error ? 'error' : ''}
            open={dropdownOpen}
            onDropdownVisibleChange={(open) => setDropdownOpen(open)}
            {...rest}
          />
        </div>
        {error ? (
          <span className="text-error text-sm">{errorMessage}</span>
        ) : null}
      </div>
    </>
  );
};

export default SelectField;
