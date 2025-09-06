import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { SignUpCard } from "@/features/auth/components/Sign-upCard";

const SignUpPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/landing");
  }

  return <SignUpCard />;
};

export default SignUpPage;
