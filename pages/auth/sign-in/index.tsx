import Link from "next/link";
import LoginForm from "../../../components/login-form/login-form";

const SignIn = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#0b0024]/90 pt-14 px-4">
        <Link href="/" className="flex items-center justify-center py-3 my-2">
          <img src="/img/logo.svg" alt="" />
        </Link>
        <LoginForm />
      </div>
    </>
  );
};

export default SignIn;
