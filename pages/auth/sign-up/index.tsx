import Link from "next/link";
import SignUpForm from "../../../components/sign-up-form/sign-up-form";

const SignUp = () => {
  return (
    <div className="w-screen md:h-screen h-[170vh] bg-[#0b0024]/90 pt-14 px-4">
      <Link href="/" className="flex items-center justify-center py-4">
        <img src="/img/logo.svg" alt="" />
      </Link>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
