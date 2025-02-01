import { useState } from 'react';
import { useSelector } from 'react-redux';
import { themeInputColor } from 'utils/constant';
import './CustomFieldsOutlinedForm.css';

const InputFieldCustomForm = (props) => {
  const { themeMode } = useSelector((state) => state?.states);
  const [focus, setFocus] = useState(false);
  const { children, label, value, error, errorMessage } = props;
  const labelClass =
    focus || (value && value.length !== 0)
      ? `label animate-label ${error && 'label-error-color'}`
      : 'label';
  return (
    <>
      <div className="input-general-form">
        <div onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
          {children}
          <label
            style={{
              color: error
                ? themeInputColor.errorLabelTextColor
                : focus && error
                ? ''
                : themeMode === 'dark'
                ? themeInputColor.darkTextColor
                : themeInputColor.lightTextColor,
              backgroundColor: !props.notModal
                ? themeMode === 'dark'
                  ? themeInputColor.darkBachgroundColor
                  : themeInputColor.lightBachgroundColor
                : themeMode === 'dark'
                ? themeInputColor.notModalDarkBachgroundColor
                : themeInputColor.notModalLightBachgroundColor,
            }}
            className={`${labelClass}`}
          >
            {label}
            {props?.required && ' *'}
          </label>
        </div>
      </div>
      <div className="text-error text-[10px] absolute">
        {error ? errorMessage : null}
      </div>
    </>
  );
};

export default InputFieldCustomForm;
