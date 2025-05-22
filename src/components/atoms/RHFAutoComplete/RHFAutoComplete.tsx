import React from "react";
import { FormControl, FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Cascader, CascaderProps } from "antd";
import { flatMap } from "lodash";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  name: string;
  label: string;
  [key: string]: unknown;
};

const RHFAutoComplete: React.FC<Props> = ({
  name,
  label,
  options,
  ...others
}: Props) => {
  const { control, setValue } = useFormContext();

  const onChange: CascaderProps<Option, "value", true>["onChange"] = (
    value
  ) => {
    setValue(name, flatMap(value));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <p>{label}</p>
          <Cascader
            {...field}
            options={options}
            multiple
            {...others}
            className="!w-full"
            onChange={onChange}
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export { RHFAutoComplete };
