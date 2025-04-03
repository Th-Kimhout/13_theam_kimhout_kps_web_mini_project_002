"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LoginOutButton = () => {
  return (
    <Button
      onClick={() => {  
        signOut({ callbackUrl: "http://localhost:3000/login" });
      }}
    >
      Logout
    </Button>
  );
};
export default LoginOutButton;
