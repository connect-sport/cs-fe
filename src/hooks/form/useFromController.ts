import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface UseFormControllerParams {
  defaultValues: Record<string, unknown>;
  schema?: unknown;
  mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
}

export const useFormController = ({
  defaultValues,
  schema,
  mode = "onTouched",
}: UseFormControllerParams) => {
  const methods = useForm({
    defaultValues,
    resolver: schema ? yupResolver(schema) : undefined,
    mode,
  });

  return methods;
};
