import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface RHFTextFieldProps {
  name: string;
  label: string;
  [key: string]: unknown;
}

const RHFTextField = ({ name, label, ...other }: RHFTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
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
