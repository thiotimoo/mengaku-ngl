import { getUserSession } from "@/libs/auth.libs";
import BaseLink from "@/components/Buttons/BaseLink";
import React from "react";

const SignInButton = async () => {
  const user = await getUserSession();
  return (
    <>
      {user ? (
        <BaseLink className="text-underline" href="/api/auth/signout">Logout</BaseLink>
      ) : (
        <BaseLink className="text-underline" href="/api/auth/signin">Sign In</BaseLink>
      )}
    </>
  );
};

export default SignInButton;
