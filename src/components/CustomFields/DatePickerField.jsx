import { DatePicker } from 'antd';
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
  ...rest
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
          <DatePicker
            id={id}
            name={id}
            prefix={<></>}
            placeholder=""
            minDate={minDate}
            value={formik.values[id]}
            autoComplete={`off`}
            disabled={disabled}
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
            {...rest}
          />
        </InputFieldCustomForm>
        <style jsx>
          {`
            .ant-picker-dropdown .ant-picker-panel-container {
              background-color: ${themeMode === 'light' ? '' : '#1F1F1F'};
            }
            .ant-picker-dropdown .ant-picker-cell .ant-picker-cell-inner {
              color: ${themeMode === 'light' ? '' : '#939BC9'};
            }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default DatePickerField;
