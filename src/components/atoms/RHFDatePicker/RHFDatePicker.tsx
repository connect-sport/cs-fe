import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from "antd";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  format?: string;
};

const RHFDatePicker: React.FC<Props> = ({
  name,
  label,
  placeholder = "Chọn ngày",
  format = "YYYY-MM-DD",
}) => {
  const { control } = useFormContext();

  return (
    <div>
      {label && <label className="block mb-2">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            value={field.value}
            onChange={(date) => field.onChange(date)}
            format={format}
            placeholder={placeholder}
            style={{ width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export { RHFDatePicker };
