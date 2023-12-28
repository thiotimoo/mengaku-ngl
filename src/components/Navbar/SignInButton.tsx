import { getUserSession } from "@/libs/auth.libs";
import BaseLink from "@/components/Buttons/BaseLink";
import React from "react";

const SignInButton = async () => {
  const user = await getUserSession();
  return (
    <>
      {user ? (
        <BaseLink href="/api/auth/signout">Signed as {user?.name}</BaseLink>
      ) : (
        <BaseLink href="/api/auth/signin">Sign In</BaseLink>
      )}
    </>
  );
};

export default SignInButton;
