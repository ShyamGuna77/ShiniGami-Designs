

import { redirect } from "next/navigation";

import { SignUpCard } from "@/features/auth/components/Sign-upCard";

import { auth } from "@/auth";

const SignUpPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return <SignUpCard />;
};

export default SignUpPage;
