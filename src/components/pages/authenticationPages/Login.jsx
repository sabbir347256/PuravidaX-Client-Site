import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../utils/CustomButton";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Costa Rica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-1/2 left-1/4 text-white max-w-md">
          <h1 className="text-5xl font-bold leading-tight">
            Begin Your <br /> Costa Rica Story
          </h1>
          <p className="mt-4 text-lg">
            Join 45,000+ travelers who've discovered paradise.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            WelCome Back
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Sign in to continue your adventure
          </p>
          <div className="mt-6 space-y-3">
            {/* <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 bg-white">
              <FcGoogle size={20} />
              Continue With Google
            </button> */}
            <CustomButton
              text={"Continue With Google"}
              border={"border"}
              padding={"py-3"}
              width={"w-full"}
            >
              <FcGoogle size={20} />
            </CustomButton>
            <CustomButton
              text={"Continue With Apple"}
              border={"border"}
              padding={"py-3"}
              width={"w-full"}
            >
              <FaApple size={18} />
            </CustomButton>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-400">
              Or Sign Up With Email
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                type="password"
                placeholder="Type your password"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-green-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end gap-2 text-sm text-primary">
              <h1>Forgot Password</h1>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}
            {/* <CustomButton
              text={"Create Account"}
              border={"border"}
              padding={"py-3"}
              width={"w-full"}
              bg={"bg-green-700"}
              textColor={"text-white"}
              rounded={"rounded-lg"}
              hover={"bg-green-800"}
            ></CustomButton> */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-green-800 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <NavLink to="/signup">
              <span className="text-primary font-medium cursor-pointer">
                Siun Up
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
