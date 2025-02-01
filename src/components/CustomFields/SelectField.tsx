/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import React, { useState } from "react";
import "./style.css";

const { Option } = Select;

// Define the prop types for SelectField
interface SelectFieldProps {
  id: string;
  label?: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  disabled?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  size?: SizeType;
  required?: boolean;
  error?: boolean;
  shrink?: boolean;
  errorMessage?: string;
  name?: string;
  [key: string]: any;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  value,
  options,
  disabled,
  onChange,
  onBlur,
  size = "large",
  placeholder = "",
  required,
  shrink,
  error,
  errorMessage,
  name, // Handle name explicitly
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    if (onBlur) onBlur();
  };

  const status = undefined;

  return (
    <>
      <div>
        <div className="floating-label-input mt-[10px]">
          <Select
            showSearch
            id={id}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            optionFilterProp="children"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            size={size}
            status={status}
            style={{
              // backgroundColor: "transparent",
              // borderRadius: "0px",
              // fontFamily: "inter-med",
              // boxShadow: "none",
              border: "none",
              // padding: "10px 10px 5px 0px",
              borderBottom: error ? "1px solid #FF1F1F" : "1px solid #505050",
              width: "100%",
            }}
            {...rest}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
          <label
            className={`${focused || value || shrink ? "focused" : ""} ${error ? "text-[#FF1F1F] " : "text-[#0B89CA]"
              } flex items-end space-x-1`}
          >
            {label && <div>{label}</div>}
          </label>
        </div>
        {error && (
          <div className="text-[10px] text-[#FF1F25] mt-[3px] absolute">
            {errorMessage}
          </div>
        )}
      </div>
      {/* <style jsx>{`
        .ant-select-selector {
          border: none;
        }
      `}</style> */}
    </>
  );
};

export default SelectField;
