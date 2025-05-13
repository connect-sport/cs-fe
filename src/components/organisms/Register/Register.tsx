import { RHFCheckboxField } from "@/components/atoms/RHFCheckbox";
import { RHFTextField } from "@/components/atoms/RHFInput";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const Register: React.FC = () => {
  const { watch, setValue } = useFormContext();

  const isOwner = watch("isOwner");

  useEffect(() => {
    if (!isOwner) {
      setValue("phoneNumber", "");
    }
  }, [isOwner, setValue]);

  return (
    <main>
      <h1 className="text-2xl font-bold text-center">Đăng ký</h1>

      <div className="mt-2">
        <RHFTextField name="name" label="Tên của bạn" />
      </div>

      <div className="mt-2">
        <RHFTextField name="email" label="Email của bạn" />
      </div>

      <div className="mt-2">
        <RHFTextField
          type="password"
          name="password"
          label="Mật khẩu của bạn"
        />
      </div>

      <div className="mt-2">
        <RHFTextField
          type="password"
          name="confirmPassword"
          label="Nhập lại mật khẩu của bạn"
        />
      </div>

      <div className="mt-2">
        <RHFCheckboxField
          name="isOwner"
          label="Bạn có phải là chủ sở hữu không?"
        />
        <Typography className="font-semibold text-xs text-blue-500 p-1">
          Nếu bạn là chủ sở hữu sân, vui lòng cung cấp số điện thoại để chúng
          tôi cấp token đăng nhập, tránh trường hợp hacker lợi dụng
        </Typography>
      </div>

      {isOwner && (
        <div className="mt-2">
          <RHFTextField
            type="number"
            name="phoneNumber"
            label="Số điện thoại của bạn"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Register
      </button>
    </main>
  );
};

export { Register };
