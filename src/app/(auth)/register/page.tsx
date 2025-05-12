import dynamic from "next/dynamic";
import { Suspense } from "react";

const RegisterPage = dynamic(() =>
  import("@/components/pages/RegisterPage").then((mod) => mod.RegisterPage)
);

export default function Register() {
  return (
    <Suspense fallback={<div>{"...loading"}</div>}>
      <RegisterPage />
    </Suspense>
  );
}
