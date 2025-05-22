"use client";

import React from "react";
import { Login } from "@/components/organisms/Login";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import { LoginFormValues, loginSchema } from "@/schemas/login";
import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/stores/contexts/SnackBarContext";

const LoginPage: React.FC = () => {
  const { replace } = useRouter();
  const { login } = useLogin();
  const { showError } = useSnackbar();

  const onSubmit = (data: LoginFormValues) => {
    login(data, {
      onSuccess: () => {
        replace("/");
      },
      onError: (error) => {
        showError(error.message);
      },
    });
  };

  return (
    <RHFFormProvider<LoginFormValues>
      schema={loginSchema}
      onSubmit={onSubmit}
      defaultValues={{
        email: "",
        password: "",
      }}
      className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md"
    >
      <Login />
    </RHFFormProvider>
  );
};

export { LoginPage };
