import { DatePicker } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { themeInputColor } from 'utils/constant';
import InputFieldCustomForm from './CustomFieldsOutlinedForm';

const DatePickerField = ({
  formik,
  id,
  label,
  required = true,
  minDate,
  notModal = false,
  disabled = false,
}) => {
  const { themeMode } = useSelector((state) => state?.states);
  const { RangePicker } = DatePicker;
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
          <RangePicker
            id={id}
            name={id}
            prefix={<></>}
            placeholder=""
            minDate={minDate}
            disabled={disabled}
            value={formik.values[id]}
            autoComplete={`new-${id}`}
            onChange={(newValue, _) => {
              formik.setFieldValue(id, newValue);
            }}
            onBlur={(e) =>
              formik.handleBlur({
                target: {
                  name: id,
                  id: id,
                },
              })
            }
            style={{
              border: !(formik.touched[id] && Boolean(formik.errors[id]))
                ? themeMode === 'light'
                  ? `1px solid ${themeInputColor.lightBorderColor}`
                  : `1px solid ${themeInputColor.darkBorderColor}`
                : `1px solid ${themeInputColor.errorBorderColor}`,

              borderRadius: '5px',
              caretColor:
                themeMode === 'light'
                  ? themeInputColor.lightCaretColor
                  : themeInputColor.darkCaretColor,
              color:
                themeMode === 'light'
                  ? themeInputColor.lightTextColor
                  : themeInputColor.darkTextColor,
            }}
          />
        </InputFieldCustomForm>
      </div>
    </>
  );
};

export default DatePickerField;
