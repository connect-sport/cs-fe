import React from "react";
import {
  Controller,
  useFormContext,
  FieldValues,
  FieldPath,
} from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormGroup,
} from "@mui/material";

type RHFCheckboxProps<T extends FieldValues> = {
  name: FieldPath<T>;
  label: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function RHFCheckboxField<T extends FieldValues>({
  name,
  label,
  disabled = false,
  onChange,
}: RHFCheckboxProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name]?.message as string;

  const handleChange = (checked: boolean) => {
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <FormGroup>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={!!field.value}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  handleChange(e.target.checked);
                }}
                disabled={disabled}
              />
            }
            label={label}
          />
        )}
      />
      {error && (
        <FormHelperText error style={{ marginLeft: "14px" }}>
          {error}
        </FormHelperText>
      )}
    </FormGroup>
  );
}

export { RHFCheckboxField };
