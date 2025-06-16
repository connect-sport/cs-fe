import React from "react";
import { TimePicker, Form, Space, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { Dayjs } from "dayjs";

type Props = {
  name: [string, string];
  label?: string;
  required?: boolean;
  format?: string;
};

const RHFTimeRangePicker: React.FC<Props> = ({
  name,
  label,
  required = false,
  format = "HH:mm",
}) => {
  const { control, watch } = useFormContext();
  const fromTime: Dayjs | null = watch(name[0]);

  const getDisabledToTime = () => {
    if (!fromTime) return {};

    const fromHour = fromTime.hour();
    const fromMinute = fromTime.minute();

    return {
      disabledTime: () => ({
        disabledHours: () => Array.from({ length: fromHour }, (_, i) => i),
        disabledMinutes: (selectedHour: number) => {
          if (selectedHour === fromHour) {
            return Array.from({ length: fromMinute + 1 }, (_, i) => i);
          }
          return [];
        },
      }),
    };
  };

  return (
    <Form.Item required={required} className="!mb-2">
      <Typography className="mb-2">{label}</Typography>
      <Space>
        {/* From Time */}
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
                <div className="text-red-500 text-xs">
                  {fieldState.error.message}
                </div>
              )}
            </div>
          )}
        />

        <span>-</span>

        {/* To Time */}
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
                {...getDisabledToTime()}
              />
              {fieldState.error && (
                <div className="text-red-500 text-xs">
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
