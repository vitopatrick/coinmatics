import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { auth, store } from "../../firebase";
import Link from "next/link";

const SignUpForm = ({ move }: any) => {
  const router = useRouter();
  const [isText, setIsText] = useState(false);
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [country, setCountry] = useState();

  const registerUser = async (e: any) => {
    e.preventDefault();
    if (
      !phoneNumber ||
      !email ||
      (!firstName && !lastName) ||
      !country ||
      !password ||
      !confirmPassword
    ) {
      toast("Fill the form properly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }

    try {
      // register the user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // then create the users collection for firebase
      const docRef = doc(store, "/users", `/${user.email}`);
      await setDoc(docRef, {
        Email: email,
        Password: password,
        country_of_origin: country,
        Telephone: phoneNumber,
        deposited: 0,
        balance: 0,
        bonus: 0,
        verified: false,
        createAt: user.metadata.creationTime,
        Name: `${firstName} ${lastName}`,
      });

      // redirect users to the there dashboard
      router.push("/dashboard");
    } catch (error: any | unknown) {
      switch (error.code) {
        case "auth/email-already-in-use":
          return toast("Email already is in use", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
        case "auth/weak-password":
          return toast("Password is weak", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
        case "auth/invalid-email":
          return toast("Invalid Email Address", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
      }
    }
  };

  return (
    <>
      <div className="md:w-[37%] w-[90%] mx-auto p-4 bg-white shadow-md rounded">
        <div className="text-center my-3">
          <h4 className="font-bold text-2xl capitalize">Create An Account</h4>
        </div>
        <form className="mt-8">
          {/* container */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col flex-1">
              <label htmlFor="first name" className="text-sm text-bg font-bold">
                First Name
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e: any) => setFirstName(e.target.value)}
                  placeholder="Enter First Name"
                  className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-white border-[1px]"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="last name" className="text-sm text-bg font-bold">
                Last Name
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e: any) => setLastName(e.target.value)}
                  placeholder="Enter Last Name"
                  className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-white border-[1px]"
                />
              </div>
            </div>
          </div>
          {/* email address */}
          <div className="flex flex-col flex-1">
            <label
              htmlFor="Email Address"
              className="text-sm text-bg font-bold"
            >
              Email Address
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-white border-[1px]"
              />
            </div>
          </div>
          {/* phone number */}
          <div className="flex flex-col flex-1">
            <label htmlFor="Phone Number" className="text-sm text-bg font-bold">
              Phone Number
            </label>
            <div>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phoneNumber}
                onChange={(e: any) => setPhoneNumber(e.target.value)}
                placeholder="Enter Phone Number"
                className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-white border-[1px]"
              />
            </div>
          </div>
          {/* container */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col flex-1">
              <label htmlFor="Password" className="text-sm text-bg font-bold">
                Password
              </label>
              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-white border-[1px]"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="confirm password"
                className="text-sm text-bg font-bold"
              >
                Confirm Password
              </label>
              <div className="w-full">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-white border-[1px]"
                />
              </div>
            </div>
          </div>
          {/* country */}
          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="Country" className="text-sm text-bg font-bold">
              Country
            </label>
            <div className="border-[2px] rounded">
              <select
                name="country"
                id="select country"
                className="w-full py-3 px-2 outline-none"
              >
                <option value="nigeria">Nigeria</option>
                <option value="nigeria">Nigeria</option>
              </select>
            </div>
          </div>
          <button className="font-main bg-[#2980b9] text-white text-[1rem] mt-8 rounded shadow inline-block w-full py-2">
            Register
          </button>
        </form>
        <div className="text-center text-sm space-y-2 mt-8">
          <p>
            Already Have an account{" "}
            <Link href="/auth/sign-in" className="font-bold">
              Login
            </Link>
          </p>
          <p>© Copyright 2023 Coinmatics All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
