"use client";

import { RHFTextField } from "@/components/atoms/RHFInput";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import { RegisterFormValues, registerSchema } from "@/schemas/register.schema";

const RegisterPage = () => {
  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RHFFormProvider<RegisterFormValues>
        schema={registerSchema}
        onSubmit={onSubmit}
        defaultValues={{
          username: "",
          email: "",
          password: "",
        }}
        className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md"
      >
        <h1 className="text-2xl font-bold text-center">Đăng ký</h1>

        <div>
          <RHFTextField name="username" label="Tên của bạn" />
        </div>

        <div>
          <RHFTextField name="email" label="Email của bạn" />
        </div>

        <div>
          <RHFTextField
            type="password"
            name="password"
            label="Pasword của bạn"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </RHFFormProvider>
    </div>
  );
};

export { RegisterPage };
