"use client";

import React, { useState } from "react";
import ConsumerLayout from "@/components/consumerLayout";
import Image from "next/image";
import EyeIcon from "@/../../public/iconoir--eye-solid.png";
import EyeOffIcon from "@/../../public/fluent--eye-off-20-filled.png";
import { useDispatch } from "react-redux";
import { registerCustomerAsync } from "../../../redux/slice/customerProfile/customerProfileSlice";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    termsAccepted: false,
    showPassword: false,
    showConfirmPassword: false,
  });

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      passwordError:
        name === "password" && value.length < 8
          ? "Password must be at least 8 characters long"
          : "",
      confirmPasswordError:
        name === "confirmPassword" && value !== formData.password
          ? "Passwords do not match"
          : "",
    }));

    if (name === "password" && formData.confirmPassword.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        confirmPasswordError:
          value !== formData.confirmPassword ? "Passwords do not match" : "",
      }));
    }
  };

  const handlePasswordVisibility = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.password.length < 8 ||
      formData.password !== formData.confirmPassword
    ) {
      setFormData((prevState) => ({
        ...prevState,
        passwordError:
          formData.password.length < 8
            ? "Password must be at least 8 characters long"
            : "",
        confirmPasswordError:
          formData.password !== formData.confirmPassword
            ? "Passwords do not match"
            : "",
      }));
      return;
    }
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    dispatch(registerCustomerAsync(formData)).then((result) => {
      if (registerCustomerAsync.fulfilled.match(result)) {
        router.push("/consumer/productsListingPage");
      }
    });
  };

  return (
    <ConsumerLayout>
      <div className="flex justify-center my-7 min-h-screen bg-gray-100 px-4">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
          <h1 className="text-5xl font-semibold mb-6 italic text-red-500">
            <span className="text-3xl">SIGN UP WITH</span> FABGOLD
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1 italic"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm italic"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 italic"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm italic"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1 italic"
              >
                Password
              </label>
              <input
                type={formData.showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10 italic"
                placeholder="Enter your password"
                required
              />
              {formData.passwordError && (
                <p className="text-red-500 text-sm italic">
                  {formData.passwordError}
                </p>
              )}
              <button
                type="button"
                onClick={() => handlePasswordVisibility("showPassword")}
                className="absolute inset-y-0 right-0 top-5 flex items-center pr-3"
              >
                <Image
                  src={formData.showPassword ? EyeIcon : EyeOffIcon}
                  alt={
                    formData.showPassword ? "Hide password" : "Show password"
                  }
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1 italic"
              >
                Confirm Password
              </label>
              <input
                type={formData.showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10 italic"
                placeholder="Confirm your password"
                required
              />
              {formData.confirmPasswordError && (
                <p className="text-red-500 text-sm italic">
                  {formData.confirmPasswordError}
                </p>
              )}
              <button
                type="button"
                onClick={() => handlePasswordVisibility("showConfirmPassword")}
                className="absolute inset-y-0 right-0 top-5 flex items-center pr-3"
              >
                <Image
                  src={formData.showConfirmPassword ? EyeIcon : EyeOffIcon}
                  alt={
                    formData.showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700 mb-1 italic"
              >
                Mobile Number
              </label>
              <div className="relative flex items-center">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 italic">
                  +91
                </span>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="block w-full pl-14 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm italic"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 flex items-center mb-4">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label
                htmlFor="termsAccepted"
                className="ml-2 text-sm font-medium text-gray-700 italic"
              >
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-4 italic border-2 border-red-400 font-semibold rounded-md shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up Now
              </button>
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <p className="mt-4 text-sm text-gray-600 italic">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Login now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default SignUpForm;
