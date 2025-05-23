import React from "react";
import { TimePicker, Form, Space } from "antd";
import { Controller, Control, FieldValues } from "react-hook-form";

type Props = {
  control: Control<FieldValues>;
  name: [string, string];
  label?: string;
  required?: boolean;
  format?: string;
};

const RHFTimeRangePicker: React.FC<Props> = ({
  control,
  name,
  label,
  required = false,
  format = "HH:mm",
}) => {
  return (
    <Form.Item label={label} required={required}>
      <Space>
        <Controller
          name={name[0]}
          control={control}
          rules={{ required: required ? "Vui lòng chọn giờ bắt đầu" : false }}
          render={({ field, fieldState }) => (
            <div>
              <TimePicker
                {...field}
                format={format}
                placeholder="Từ giờ"
                onChange={(value) => field.onChange(value)}
              />
              {fieldState.error && (
                <div style={{ color: "red", fontSize: 12 }}>
                  {fieldState.error.message}
                </div>
              )}
            </div>
          )}
        />

        <span>-</span>

        <Controller
          name={name[1]}
          control={control}
          rules={{ required: required ? "Vui lòng chọn giờ kết thúc" : false }}
          render={({ field, fieldState }) => (
            <div>
              <TimePicker
                {...field}
                format={format}
                placeholder="Đến giờ"
                onChange={(value) => field.onChange(value)}
              />
              {fieldState.error && (
                <div style={{ color: "red", fontSize: 12 }}>
                  {fieldState.error.message}
                </div>
              )}
            </div>
          )}
        />
      </Space>
    </Form.Item>
  );
};

export { RHFTimeRangePicker };
