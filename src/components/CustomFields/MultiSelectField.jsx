import { Select } from 'antd';
import { SlArrowDown } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { themeInputColor } from 'utils/constant';
import InputFieldCustomForm from './CustomFieldsOutlinedForm';

const MultiSelectField = ({
  formik,
  id,
  label,
  required = true,
  optionData = [],
  optionId,
  optionName,
  onChange,
  notModal = false,
  disabled = false,
}) => {
  const { themeMode, colorTheme } = useSelector((state) => state?.states);
  const { Option } = Select;

  const sharedProps = {
    mode: 'multiple',
    style: {
      width: '100%',
    },
    optionData,
    maxTagCount: 'responsive',
  };

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
          <Select
            id={id}
            name={id}
            prefix={<></>}
            {...sharedProps}
            mode="multiple"
            showSearch
            optionFilterProp="label"
            value={formik.values[id]}
            disabled={disabled}
            autoComplete={`new-${id}`}
            onChange={
              onChange
                ? onChange
                : (newValue, _) => {
                    formik.setFieldValue(id, newValue);
                  }
            }
            onBlur={formik.handleBlur}
            suffixIcon={
              <SlArrowDown
                className="w-[12px] h-[12px] "
                style={{
                  color: themeMode === 'light' ? colorTheme : '#9FA8DA',
                }}
              />
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
          >
            {optionData?.map((item) => (
              <Option
                key={item[optionId]}
                value={item[optionId]}
                label={item.label}
              >
                {item[optionName]}
              </Option>
            ))}
          </Select>
        </InputFieldCustomForm>
      </div>
    </>
  );
};

export default MultiSelectField;
