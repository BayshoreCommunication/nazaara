import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  // FacebookAuthProvider,
} from "firebase/auth";
import usefetch from "@/customhooks/usefetch";
import axios from "axios";
import firebase_app from "@/firebase/config";
import { toast } from "react-hot-toast";
import { setCookie } from "cookies-next";

const SignUp = ({ setAuth }) => {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authCheck, setAuthCheck] = useState("");
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const auth = getAuth(firebase_app);
  const googleProvider = new GoogleAuthProvider();
  // const facebookProvider = new FacebookAuthProvider();

  // const googleSignIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then(async (result) => {
  //       const userGoogle = result.user;
  //       const dataCheck = userGoogle.providerData.map((elem) => elem.email);
  //       const url = `${process.env.API_URL}/api/v1/auth/user/${dataCheck}`;
  //       const userAuthCheck = await usefetch(url);

  //       const formData = {
  //         fullName: userGoogle.providerData.map((elem) => elem.displayName)[0],
  //         email: userGoogle.providerData.map((elem) => elem.email)[0],
  //         password: Math.random().toString(36).slice(-8),
  //         phone: "",
  //         gender: "",
  //         refund: 0,
  //         addressBook: [],
  //         imageUrl: userGoogle.providerData.map((elem) => elem.photoURL)[0],
  //       };

  //       if (userAuthCheck.status === "Not matched") {
  //         axios
  //           .post(`${process.env.API_URL}/api/v1/user`, formData)
  //           .then((response) => {
  //             toast.success("Successfully registered.");
  //             setAuth("signIn");
  //             console.log(response);
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       } else {
  //         toast.error("Already heve an account!");
  //         setAuthCheck("Already registered!");
  //       }
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("errorMessage", error);
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const userData = result.user;
        // console.log("result", userData);
        const userGoogle = result.user.email;
        // console.log("google email", userGoogle);

        const url = `${process.env.API_URL}/api/v1/auth/user/${userGoogle}`;
        // console.log("url", url);
        const userAuthCredential = await usefetch(url);
        // console.log("userAuthCredential", userAuthCredential);
        // console.log("User Auth Credential", userAuthCredential.user.imageUrl);
        if (userAuthCredential.user) {
          setCookie(
            "userAuthCredential",
            JSON.stringify(userAuthCredential.user),
            {
              maxAge: 24 * 60 * 60 * 1000,
            }
          );
          router.push("/");
          toast.success("Sign in Successfully.");
          setAuthCheck("Sign in complete.");
        } else {
          // toast.error("Please sign up first!");
          // setAuthCheck("Please sign up first!");
          const formData = {
            fullName: userData.displayName,
            email: userGoogle,
            password: Math.random().toString(36).slice(-8),
            phone: "",
            gender: "",
            refund: 0,
            addressBook: [],
            imageUrl: userData.photoURL,
          };
          if (userAuthCredential.status === "Not matched") {
            axios
              .post(`${process.env.API_URL}/api/v1/user`, formData)
              .then((response) => {
                // console.log("response", response);
                if (response.status === 200 || response.status === 201) {
                  setAuth("signIn");
                  setCookie("userAuthCredential", JSON.stringify(formData), {
                    maxAge: 24 * 60 * 60 * 1000,
                  });
                  setAuthCheck("Sign in complete.");
                  router.push("/");
                  toast.success("Successfully registered.");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            toast.error("Already heve an account!");
            setAuthCheck("Already registered!");
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("errorMessage", error);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // const facebookSignIn = () => {
  //   signInWithPopup(auth, facebookProvider)
  //     .then((result) => {
  //       // The signed-in user info.
  //       const userFaceBook = result.user;
  //       console.log("userFaceBook", userFaceBook);
  //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //       const credential = FacebookAuthProvider.credentialFromResult(result);
  //       const accessToken = credential.accessToken;
  //       console.log("tokenFaceBook", accessToken);
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = FacebookAuthProvider.credentialFromError(error);

  //       // ...
  //     });
  // };

  const handleInput = (input) => {
    setUser({ ...user, ...input });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const url = `${process.env.API_URL}/api/v1/auth/user/${user.email}`;
    const userAuthCheck = await usefetch(url);

    const formData = {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      refund: 0,
      addressBook: "",
      imageUrl: "/images/user.png",
    };

    if (userAuthCheck.status === "Not matched") {
      axios
        .post(`${process.env.API_URL}/api/v1/user`, formData)
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.error("error", error);
        });
    } else {
      setAuthCheck("Already registered.");
    }
  };

  return (
    <div className=" max-w-[30rem] mx-auto py-[3rem]">
      <div className="flex flex-col">
        <div className="p-6">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="">
                <input
                  id="name"
                  name="fullName"
                  type="text"
                  onChange={(event) => {
                    handleInput({ fullName: event.target.value });
                  }}
                  placeholder="Enter Your Name"
                  required
                  className="block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(event) => {
                    handleInput({ email: event.target.value });
                  }}
                  placeholder="Enter Email"
                  required
                  className="block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={(event) => {
                    handleInput({ phone: event.target.value });
                  }}
                  placeholder="Enter Phone Number"
                  required
                  className="block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(event) => {
                    handleInput({ password: event.target.value });
                  }}
                  placeholder="Enter Password"
                  required
                  className="block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                  placeholder="Confirm Your Password"
                  required
                  className="block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-gray-400 outline-none placeholder:text-gray-400 pl-3 w-full"
                />
              </div>
            </div>
            {user.password != confirmPassword && (
              <p className="text-red-600 text-center">
                Password and Confirm Password not matched
              </p>
            )}
            <div>
              {user.password != confirmPassword ? (
                <button
                  disabled
                  type="submit"
                  className="cursor-not-allowed flex w-full justify-center rounded-md bg-primary-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover-color"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  onClick={handleSignUp}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary-color px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover-color"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
          {authCheck === "Already registered." && (
            <p className="mt-4 text-center text-xl text-emerald-800">
              Already registered an account.
            </p>
          )}
          <p className="mt-4 text-center text-sm text-gray-500">
            Already a member?
            <button
              onClick={() => setAuth("signIn")}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-2 ml-1"
            >
              Sign In
            </button>
          </p>
          <div className="w-full flex items-center py-2">
            <hr className="w-full bg-gray-400" />
            <div className="flex w-full">
              <p className="text-sm font-medium leading-4 px-2.5 text-gray-400 w-max">
                Or continue with
              </p>
            </div>
            <hr className="w-full bg-gray-400 " />
          </div>
          <div className="flex justify-center gap-x-3 mt-1 font-medium">
            <button
              onClick={googleSignIn}
              className="flex group items-center justify-center gap-[6px] border rounded-md px-2 py-1 w-1/2 hover:bg-red-500 border-[#ef44444e] text-gray-600 hover:text-white"
            >
              <AiOutlineGoogle
                className="hidden group-hover:block"
                color="white"
              />
              <FcGoogle className="block group-hover:hidden" />
              Google
            </button>
            {/* <button
              // onClick={facebookSignIn}
              className="flex group items-center justify-center gap-[6px] border rounded-md px-2 py-1 hover:bg-[#1877F2] w-full border-[#1876f258] text-gray-600 hover:text-white"
            >
              <BsFacebook className="hidden group-hover:block" color="white" />
              <BsFacebook
                className="block group-hover:hidden"
                color="#1877F2"
              />
              Facebook
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
