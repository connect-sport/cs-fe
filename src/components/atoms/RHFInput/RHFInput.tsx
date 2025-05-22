import React, { useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";

interface RHFTextFieldProps {
  name: string;
  label: string;
  [key: string]: unknown;
}

const RHFTextField = ({ name, label, ...other }: RHFTextFieldProps) => {
  const { control } = useFormContext();

  const InputComponent = useMemo(
    () => (other?.type === "textarea" ? TextareaAutosize : TextField),
    [other?.type]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <InputComponent
          {...field}
          label={label}
          fullWidth
          error={!!error}
          helperText={error ? error.message : ""}
          {...other}
        />
      )}
    />
  );
};

export { RHFTextField };
