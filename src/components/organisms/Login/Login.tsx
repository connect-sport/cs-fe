import React from "react";
import { RHFTextField } from "@/components/atoms/RHFInput";

const Login: React.FC = () => {
  return (
    <section>
      <div className="mt-2">
        <RHFTextField name="email" label="Email của bạn" />
      </div>

      <div className="mt-2">
        <RHFTextField
          name="password"
          type="password"
          label="Mật khẩu của bạn"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Đăng nhập
      </button>
    </section>
  );
};

export { Login };
