import React from "react";
import {
  useFormContext,
  Controller,
  FieldValues,
  FieldPath,
} from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

type Option = {
  label: string;
  value: string;
};

type RHFRadioGroupProps<T extends FieldValues> = {
  name: FieldPath<T>;
  label: string;
  options: Option[];
  row?: boolean;
};

function RHFRadioGroup<T extends FieldValues>({
  name,
  label,
  options,
  row = false,
}: RHFRadioGroupProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name]?.message as string;

  return (
    <FormControl component="fieldset" error={!!error}>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} row={row}>
            {options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        )}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

export { RHFRadioGroup };
