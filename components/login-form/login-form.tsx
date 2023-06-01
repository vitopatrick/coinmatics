// @ts-ignore
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [isText, setIsText] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleIsText = () => {
    setIsText(!isText);
  };

  const router = useRouter();

  const loginUser = async (event: any) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      // check if the email is a valid email address
      switch (error.code) {
        case "auth/invalid-email":
          return toast(
            "Invalid Email Address,please use a valid email address",
            {
              type: "error",
              bodyClassName: "toast",
              position: "bottom-center",
            }
          );
        case "auth/internal-error":
          return toast("Server Error Please Refresh your browser or tab", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/wrong-password":
          return toast("Password is incorrect", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/user-not-found":
          return toast("User Does not exist", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/network-request-failed":
          return toast("Poor internet Connection", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        default:
          return toast(error.code, {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
      }
    }
  };

  return (
    <>
      <div className="md:w-[30%] mx-auto p-4 bg-white rounded shadow-md ">
        <form>
          {/* form header */}
          <div>
            <h3 className="md:text-bg text-4xl font-bold text-center ">
              User Login
            </h3>
          </div>
          {/* Email or sub account */}
          <div className="flex flex-col mt-8">
            <label htmlFor="email" className="text-sm text-bg font-bold">
              Email
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-white border-[1px]"
              />
            </div>
          </div>
          {/* password fieldset */}
          <div className="mt-4 flex flex-col">
            <label htmlFor="password" className="text-sm text-bg  font-bold">
              Password
            </label>
            <div className="flex items-center mt-3 bg-white border-[2px] py-2 rounded">
              <input
                type={isText ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="flex-1 bg-transparent outline-none py-1 pl-2"
              />
              <div className="pr-4">
                {/* change type based on state changes */}
                {isText ? (
                  <BsEye onClick={toggleIsText} />
                ) : (
                  <BsEyeSlash onClick={toggleIsText} />
                )}
              </div>
            </div>
          </div>
          {/* login button */}
          <button
            onClick={loginUser}
            className="font-main bg-[#2980b9] text-white text-[1rem] mt-8 rounded shadow inline-block w-full py-2"
          >
            Login
          </button>
          <div className="flex flex-col justify-center items-center text-center my-4">
            <div className="flex gap-1">
              <p>Forget Password</p>{" "}
              <Link href="/auth/forgot-password" className="font-bold">
                {" "}
                Reset
              </Link>
            </div>
            <div className="flex gap-1">
              <p>Don't Have an account yet </p>{" "}
              <Link href="/auth/sign-up" className="font-bold">
                {" "}
                sign Up?
              </Link>
            </div>
          </div>
          <div className="text-center py-3 text-sm">
            © copyright 2023 coinmatics All Rights Reserved
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
