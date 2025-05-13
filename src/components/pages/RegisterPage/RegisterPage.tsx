"use client";

import { Register } from "@/components/organisms/Register";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import { RegisterFormValues, registerSchema } from "@/schemas/register.schema";
import { useRegisterUser } from "@/hooks/auth/useRegister";
import { RegisterSuccess } from "@/components/molecules/RegisterSuccess/RegisterSuccess";

const RegisterPage = () => {
  const { register, isSuccess } = useRegisterUser();

  const onSubmit = (data: RegisterFormValues) => {
    register(data);
  };

  if (isSuccess) {
    return <RegisterSuccess />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RHFFormProvider<RegisterFormValues>
        schema={registerSchema}
        onSubmit={onSubmit}
        defaultValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          isOwner: false,
          phoneNumber: "",
        }}
        className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md"
      >
        <Register />
      </RHFFormProvider>
    </div>
  );
};

export { RegisterPage };
