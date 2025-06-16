import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

type PhoneInputProps = {
  name: string;
  className?: string;
  label?: string;
  required?: boolean;
};

const RHFPhoneInput: React.FC<PhoneInputProps> = ({
  name,
  className = "",
  label = "Số điện thoại",
  required = true,
}) => {
  const { control } = useFormContext();

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? "Bắt buộc nhập số điện thoại" : false,
          validate: (value) =>
            value.replace(/\D/g, "").length === 10 ||
            "Số điện thoại phải đủ 10 chữ số",
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputMask
              mask="(+84) 999 999 999"
              maskChar=""
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              disabled={false}
            >
              {(inputProps) => (
                <Input
                  {...inputProps}
                  ref={field.ref}
                  type="tel"
                  placeholder="(+84) 912 345 678"
                />
              )}
            </InputMask>
            {error && <p className="text-red-50">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export { RHFPhoneInput };
