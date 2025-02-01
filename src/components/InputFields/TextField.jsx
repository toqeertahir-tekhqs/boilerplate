import React from 'react';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
const TextField = ({
  id,
  label,
  type,
  name,
  value,
  disabled,
  onChange,
  onBlur,
  placeholder,
  required,
  error,
  errorMessage,
  ...rest
}) => {
  const { themeMode, colorTheme } = useSelector((state) => state?.states);
  return (
    <>
      <div>
        <div className=" flex items-end space-x-1 mb-[5px] h-[25px]">
          {label && (
            <label
              className={` text-[14px] font-med `}
              style={{
                color: themeMode === 'light' ? '#000000' : '#9F9B93',
              }}
            >
              {label}
            </label>
          )}
          {required && <span className="text-[#FF1F25]">*</span>}
        </div>
        <div>
          <Input
            id={id}
            type={type}
            name={name}
            value={value}
            size="large"
            placeholder={placeholder}
            style={{
              backgroundColor: themeMode === 'light' ? 'white' : '#121212',
              // border: error
              //   ? '1px solid #ff4d4f'
              //   : themeMode === 'light'
              //   ? '1px solid #d9d9d9'
              //   : '1px solid #9F9B93',
              borderRadius: '8px',
              caretColor: themeMode === 'light' ? colorTheme : '#9F9B93',
              // color: themeMode === 'light' ? 'black' : '#9F9B93',
              fontFamily: 'inter-med',
              // boxShadow: 'none',
            }}
            onChange={onChange}
            status={`${error && 'error'}`}
            onBlur={onBlur}
            disabled={disabled}
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

export default TextField;
