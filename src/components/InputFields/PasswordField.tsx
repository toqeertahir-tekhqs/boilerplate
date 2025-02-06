/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

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
				<label
					className={`${error ? "text-[#FF1F1F]" : "text-[#344054]"
						} font-medium text-[14px] `}
				>
					{label && <div>{label}</div>}
				</label>
				<div className={``}>
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
										color: "#002a36f1",
									}}
								/>
							) : (
								<EyeInvisibleOutlined
									style={{
										color: "#002a36f1",
									}}
								/>
							)
						}
						style={{
							// backgroundColor: focused ? "#fff7f5" : "transparent",
							borderRadius: "8px",
							caretColor: "#002a36f1",
							fontFamily: "Sora",
							boxShadow: "none",
							fontSize: "14px",
							fontWeight: 400,
							height: '38px'
							// color: "#B49C97",
						}}
						{...rest}
					/>
				</div>
				{error && (
					<div className=" text-[10px] text-[#FF1F1F] mt-[3px] absolute">
						{errorMessage}
					</div>
				)}
			</div>
		</>
	);
};

export default TextField;
