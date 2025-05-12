import React, { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

type RHFFormProviderProps<T extends FieldValues> = {
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
  schema?: ZodSchema<T>;
  defaultValues?: UseFormProps<T>["defaultValues"];
  className?: string;
};

export function RHFFormProvider<T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  className,
}: RHFFormProviderProps<T>) {
  const methods = useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
    mode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
