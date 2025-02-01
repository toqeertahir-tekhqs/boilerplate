import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";
interface PhoneInputProps {
  label: string;
  name: string;
  value: string;
  error?: boolean;
  onChange: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  disabled?: boolean;
  shrink?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  name,
  error = false,
  value,
  onChange,
  onBlur,
  shrink = true,
  errorMessage,
  disabled = false,
  ...rest
}) => {
  const theme = createTheme({
    components: {
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: "white",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: "#9f9b93",
            "&:hover": {
              backgroundColor: "#FFF5F0",
            },
            "&.Mui-selected": {
              backgroundColor: "#D78D7C",
              color: "#FFFFFF",
            },
          },
        },
      },
    },
  });
  const [focused, setFocused] = useState<boolean>(false);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(value !== "");
    if (onBlur) onBlur(event);
  };
  return (
    <>
      <div
        className="floating-label-input "
        style={{
          borderBottom: error ? "1px solid #FF1F1F" : "1px solid black",
        }}
      >
        <ThemeProvider theme={theme}>
          <div className="">
            <MuiTelInput
              name={name}
              value={value}
              onChange={onChange}
              onBlur={handleBlur}
              disabled={disabled}
              size="small"
              fullWidth
              helperText={
                <Typography
                  sx={{
                    color: error ? "#FF1F1F" : "#113D4E",
                    fontSize: "10px",
                    fontWeight: 200,
                    marginLeft: "-12px",
                    marginTop: "3px",
                    position: "absolute",
                  }}
                >
                  {errorMessage}
                </Typography>
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  padding: "0px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "0px solid",
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "0px solid",
                    borderColor: "black",
                    boxShadow: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "0px solid",
                    borderColor: "black",
                    boxShadow: "none",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "14px",
                    fontFamily: "fontMonospace",
                    "&:focus": {
                      outline: "none",
                    },
                  },
                  "& .MuiTelInput-Flag": {
                    height: "15px",
                    width: "15px",
                  },
                  "& .MuiTelInput-Typography-calling-code": {
                    color: "blue",
                  },
                },
              }}
              {...rest}
            />
          </div>
        </ThemeProvider>
        <label
          className={`${focused || value || shrink ? "focused" : ""} ${error ? "text-[#FF1F1F]" : "text-[#0B89CA]"
            } flex items-end space-x-1`}
        >
          {label && <div>{label}</div>}
          {/* {<span className="text-[#FF1F25]">*</span>} */}
        </label>
      </div>
    </>
  );
};

export default PhoneInput;

// import {
//   MuiTelInput,
//   type MuiTelInputContinent,
//   type MuiTelInputCountry,
//   type MuiTelInputFlagElement,
//   type MuiTelInputInfo,
// } from "mui-tel-input";
// import React from "react";

// interface PhoneInputProps {
//   label: string;
//   name: string;
//   value: string;
//   error?: boolean;
//   onChange: (value: string) => void;
//   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
//   errorMessage?: string;
//   disabled?: boolean;
// }

// const PhoneInput: React.FC<PhoneInputProps> = ({
//   label,
//   name,
//   value,
//   onChange,
//   onBlur,
//   error,
//   errorMessage,
//   disabled,
// }) => {
//   const continents: MuiTelInputContinent[] = ["EU"];
//   const excludedCountries: MuiTelInputCountry[] = ["FR"];
//   const unknownFlag: MuiTelInputFlagElement = <img src=".." />;

//   return (
//     <div>
//       <label htmlFor={name}>{label}</label>
//       <MuiTelInput
//         id={name}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         disabled={disabled}
//       />
//       {error && <div style={{ color: "red" }}>{errorMessage}</div>}

//     </div>
//   );
// };

// export default PhoneInput;
