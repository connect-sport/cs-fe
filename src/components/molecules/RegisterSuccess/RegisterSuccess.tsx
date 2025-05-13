import { LOGIN_PATH } from "@/constants/path";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterSuccess: React.FC = () => {
  const { replace } = useRouter();

  const handleClick = () => {
    replace(LOGIN_PATH);
  };

  return (
    <div>
      <h1>Registration Successful</h1>
      <p>Your account has been successfully created.</p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Quay về trang đăng nhập
      </Button>
    </div>
  );
};

export { RegisterSuccess };
