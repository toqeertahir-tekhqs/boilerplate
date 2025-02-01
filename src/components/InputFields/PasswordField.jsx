import React, { useState } from 'react';
import { Input } from 'antd';
import { IoEye } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const PasswordField = ({
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
  labelClassName,
  inputClassName,
  error,
  errorMessage,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { themeMode, colorTheme } = useSelector((state) => state?.states);
  return (
    <>
      <div>
        <div className=" flex items-end space-x-1 mb-[5px]">
          {label && (
            <label className={` text-[14px] font-medium`}>{label}</label>
          )}
          {required && <label className="text-error">*</label>}
        </div>
        <div
          className={`flex justify-between items-center  rounded-[8px]  ${
            error
              ? 'border-error border-[1px]'
              : themeMode === 'light'
              ? 'border-[#E6E6E6] border-[1px]'
              : 'border-[#9F9B93] border-[1px]'
          }`}
          style={{
            backgroundColor: themeMode === 'light' ? 'white' : '#121212',
          }}
        >
          <Input
            id={id}
            type={passwordVisible ? 'text' : 'password'}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            style={{
              backgroundColor: themeMode === 'light' ? 'white' : '#121212',
              // border: error
              //   ? '1px solid #ff4d4f'
              //   : themeMode === 'light'
              //   ? '1px solid #d9d9d9'
              //   : '1px solid #9F9B93',
              borderRadius: '8px',
              caretColor: themeMode === 'light' ? colorTheme : '#9F9B93',
              color: themeMode === 'light' ? 'black' : '#9F9B93',
              fontFamily: 'inter-med',
              // boxShadow: 'none',
            }}
            size="large"
            className="border-none"
            {...rest}
          />
          <div
            onClick={() => {
              setPasswordVisible((prev) => !prev);
            }}
            className="cursor-pointer px-2 rounded-md"
            style={{
              backgroundColor: themeMode === 'light' ? 'white' : '#121212',
            }}
          >
            {passwordVisible ? (
              <IoEye
                className={` w-[25px] h-[25px]`}
                style={{
                  color: error
                    ? '#ff4d4f'
                    : themeMode === 'light'
                    ? colorTheme
                    : '#9F9B93',
                }}
              />
            ) : (
              <FaEyeSlash
                className={` w-[25px] h-[25px]`}
                style={{
                  color: error
                    ? '#ff4d4f'
                    : themeMode === 'light'
                    ? colorTheme
                    : '#9F9B93',
                }}
              />
            )}
          </div>
        </div>
        {error ? (
          <span className="text-error text-sm">{errorMessage}</span>
        ) : null}
      </div>
    </>
  );
};

export default PasswordField;
