import Button from "components/Buttons/Button";
import PasswordField from "components/InputFields/PasswordField";
import TextField from "components/InputFields/TextField";
import ToastNotification from "components/ToastNotification";
import { useFormik } from "formik";
import useApiClient from "hooks/useApiClient";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setToken } from "store/slices";
import * as Yup from 'yup';

interface FormValues {
    email: string;
    password: string;
}
const Login = () => {
    const dispatch = useDispatch()
    const { postRequestAuth } = useApiClient();
    const { t } = useTranslation();
    const login = t('Login', { returnObjects: true }) as {
        mainHeader: string;
        loginButton: string;
        emailInvalid: string;
        emailRequired: string;
        passwordInvalid: string;
        passwordRequired: string;
        emailTitle: string;
        passwordTitle: string;
        invalidUserText: string;
    };

    const {
        mainHeader,
        loginButton,
        emailInvalid,
        emailRequired,
        passwordRequired,
        passwordInvalid,
        emailTitle,
        passwordTitle,
        invalidUserText
    } = login;

    const [isLoading, setLoading] = useState<boolean>(false);
    const formik = useFormik<FormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email(emailInvalid)
                .required(emailRequired),
            password: Yup.string()
                .min(6, passwordInvalid)
                .required(passwordRequired),
        }),
        onSubmit: ({ email, password }) => {
            const payload = {
                email: email,
                password: password,
            };
            setLoading(true);
            postRequestAuth("/admin/adminLogin", payload)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((res: any) => {
                    if (res?.success) {
                        setLoading(false);
                        dispatch(setToken(res?.data?.accessToken));
                    } else {
                        ToastNotification("success", res?.message || invalidUserText);
                    }
                })
                .catch((res) => {
                    ToastNotification(
                        "success",
                        res?.response?.data?.message || invalidUserText
                    );
                    setLoading(false);
                }).finally(() => {
                    setLoading(false);
                });

        },
    });
    return (
        <div className="flex items-center justify-center  h-[-webkit-fill-available]">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className=" flex justify-center items-center flex-col w-full gap-5">
                    <div className="text-2xl font-bold text-center mb-4">{mainHeader}</div>
                    <div className="mb-4 relative w-full">
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label={emailTitle}
                            size="large"

                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            errorMessage={
                                formik.touched.email && formik.errors.email
                                    ? String(formik.errors.email)
                                    : undefined
                            }
                        />
                    </div>
                    <div className="mb-4 relative w-full">
                        <PasswordField
                            id="password"
                            name="password"
                            type="password"
                            label={passwordTitle}
                            size="large"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={
                                formik.touched.password && Boolean(formik.errors.password)
                            }
                            errorMessage={
                                formik.touched.password && formik.errors.password
                                    ? String(formik.errors.password)
                                    : undefined
                            }
                        />
                    </div>

                    <div className="flex justify-center w-full">
                        <Button title={loginButton}
                            loading={isLoading}
                            disabled={isLoading}
                            onClick={() => {
                                formik.handleSubmit();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
