import { LoginPage } from "@/components/pages/LoginPage";
import { Suspense } from "react";

export default function Login() {
  return (
    <Suspense fallback={<div>{"...loading"}</div>}>
      <LoginPage />
    </Suspense>
  );
}
