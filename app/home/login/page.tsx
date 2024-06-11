import { LoginForm } from "@/components/login/LoginForm";
import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-col m-auto w-full md:w-1/4 mt-10">
        <h2 className="text-pink-500 text-2xl font-bold">Inicia Sessión</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
