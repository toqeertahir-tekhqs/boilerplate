/* eslint-disable @typescript-eslint/no-unused-vars */
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import React, { useState } from "react";
import "./style.css";
// Define the prop types for TextField
interface TextFieldProps {
  id: string;
  label?: string;
  type: string;
  name: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: SizeType;
  required?: boolean;
  error?: boolean;
  shrink?: boolean;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type,
  name,
  value,
  disabled,
  onChange,
  onBlur,
  size,
  placeholder,
  required,
  shrink,
  error,
  errorMessage,
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(value !== "");
    if (onBlur) onBlur(event);
  };
  const status = error ? "error" : undefined;
  return (
    <>
      <div>
        <div className={`floating-label-input mt-[0px]`}>
          <Input.Password
            id={id}
            type={type}
            name={name}
            value={value}
            size={size}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            disabled={disabled}
            status={status}
            iconRender={(visible) =>
              visible ? (
                <EyeOutlined
                  style={{
                    color: "#0B89CA",
                  }}
                />
              ) : (
                <EyeInvisibleOutlined
                  style={{
                    color: "#0B89CA",
                  }}
                />
              )
            }
            style={{
              backgroundColor: "transparent",
              borderRadius: "0px",
              caretColor: "#D78C7C",
              fontFamily: "inter-med",
              border: "0px",
              boxShadow: "none",
              padding: "10px 10px 5px 4px",
              borderBottom: error ? "1px solid #FF1F1F" : "1px solid #505050",
            }}
            {...rest}
          />

          <label
            className={`${focused || value || shrink ? "focused" : ""} ${error ? "text-[#FF1F1F]" : "text-[#0B89CA]"
              } flex items-end space-x-1`}
          >
            {label && <div>{label}</div>}
            {/* {<span className="text-[#FF1F25]">*</span>} */}
          </label>
        </div>
        {error && (
          <div className=" text-[10px] text-[#FF1F1F] mt-[3px] absolute w-[30%]">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default TextField;
