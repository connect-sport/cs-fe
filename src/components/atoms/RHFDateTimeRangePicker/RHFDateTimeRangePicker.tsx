"use client";

import React, { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { DatePicker, Form, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { DATE_TIME_FORMAT } from "@/constants/date";

type Props = {
  name: [string, string]; // ['fromDateTime', 'toDateTime']
  label?: string;
  required?: boolean;
};

const RHFDateTimeRangePicker: React.FC<Props> = ({
  name,
  label,
  required = false,
}) => {
  const { control, setValue } = useFormContext();

  const fromValue = useWatch({ control, name: name[0] });

  const disablePastDates = (current: dayjs.Dayjs) => {
    return current && current < dayjs().startOf("day");
  };

  useEffect(() => {
    if (fromValue && dayjs(fromValue).isValid()) {
      const autoToDate = dayjs(fromValue).add(2, "hour");
      setValue(name[1], autoToDate);
    } else {
      setValue(name[1], null);
    }
  }, [fromValue, setValue, name]);

  useEffect(() => {
    console.log("fromValue:", fromValue); // ✅ nên là Dayjs
    console.log("formatted:", fromValue?.format?.("YYYY-MM-DD HH:mm")); // kiểm tra giờ
  }, [fromValue]);

  return (
    <Form.Item label={label} required={required}>
      <Space>
        <Controller
          name={name[0]}
          control={control}
          rules={{
            required: required ? "Vui lòng chọn thời gian bắt đầu" : false,
          }}
          render={({ field, fieldState }) => (
            <div>
              <DatePicker
                {...field}
                showTime
                format={DATE_TIME_FORMAT}
                placeholder="Từ ngày giờ"
                value={field.value ?? null}
                onChange={(value) => field.onChange(value)}
                disabledDate={disablePastDates}
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

        <Controller
          name={name[1]}
          control={control}
          rules={{
            required: required ? "Vui lòng chọn thời gian kết thúc" : false,
            validate: (toValue: Dayjs) => {
              if (fromValue && toValue) {
                if (toValue.isBefore(fromValue)) {
                  return "Thời gian kết thúc phải sau thời gian bắt đầu";
                }
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <div>
              <DatePicker
                {...field}
                value={field.value ?? null}
                onChange={(value) => field.onChange(value)}
                showTime
                format={DATE_TIME_FORMAT}
                placeholder="Đến ngày giờ"
                disabledDate={(current: Dayjs) =>
                  fromValue ? current.isBefore(fromValue, "day") : false
                }
                disabledTime={(current: Dayjs) => {
                  if (!fromValue || !current) return {};
                  if (!current.isSame(fromValue, "day")) return {};
                  return {
                    disabledHours: () => {
                      const hour = fromValue.hour();
                      return Array.from({ length: hour }, (_, i) => i);
                    },
                    disabledMinutes: (selectedHour: number) => {
                      if (selectedHour !== fromValue.hour()) return [];
                      const minute = fromValue.minute();
                      return Array.from({ length: minute }, (_, i) => i);
                    },
                  };
                }}
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

export { RHFDateTimeRangePicker };
