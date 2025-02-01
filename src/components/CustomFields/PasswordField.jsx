/** @format */

import { Input } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { themeInputColor } from "utils/constant";
import InputFieldCustomForm from "./CustomFieldsOutlinedForm";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const PasswordField = ({
	formik,
	id,
	label,
	required = true,
	maxLength,
	notModal = false,
	type = "text",
	disabled = false,
}) => {
	const { themeMode, colorTheme } = useSelector((state) => state?.states);

	return (
		<>
			<div className="wrapper-fields">
				<InputFieldCustomForm
					label={label}
					name={id}
					value={formik.values[id]}
					error={formik.touched[id] && Boolean(formik.errors[id])}
					errorMessage={formik.errors[id]}
					required={required}
					notModal={notModal}
				>
					<Input.Password
						id={id}
						name={id}
						prefix={<></>}
						type={type}
						maxLength={maxLength}
						value={formik.values[id]}
						autoComplete={`new-${"password"}`}
						disabled={disabled}
						onChange={(e) => {
							formik.handleChange(e);
							formik.setFieldTouched(id, true, false);
						}}
						onBlur={formik.handleBlur}
						style={{
							border: !(formik.touched[id] && Boolean(formik.errors[id]))
								? themeMode === "light"
									? `1px solid ${themeInputColor.lightBorderColor}`
									: `1px solid ${themeInputColor.darkBorderColor}`
								: `1px solid ${themeInputColor.errorBorderColor}`,

							borderRadius: "5px",
							caretColor:
								themeMode === "light"
									? themeInputColor.lightCaretColor
									: themeInputColor.darkCaretColor,
							color:
								themeMode === "light"
									? themeInputColor.lightTextColor
									: themeInputColor.darkTextColor,
						}}
						iconRender={(visible) =>
							visible ? (
								<EyeOutlined
									style={{
										color: !(formik.touched[id] && Boolean(formik.errors[id]))
											? themeMode === "light"
												? colorTheme
												: "#9FA8DA"
											: "#f44336",
									}}
								/>
							) : (
								<EyeInvisibleOutlined
									style={{
										color: !(formik.touched[id] && Boolean(formik.errors[id]))
											? themeMode === "light"
												? colorTheme
												: "#9FA8DA"
											: "#f44336",
									}}
								/>
							)
						}
					/>
				</InputFieldCustomForm>
			</div>
		</>
	);
};

export default PasswordField;
