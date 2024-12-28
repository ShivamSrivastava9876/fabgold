"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ConsumerLayout from "@/components/consumerLayout";
import AccountDetailsSidebar from "@/components/accountDetailsSidebar";
import HamburgerIcon from "@/../../public/charm--menu-hamburger.png";
import CrossIcon from "@/../../public/charm--cross.png";
import EyeIcon from "@/../../public/iconoir--eye-solid.png";
import EyeOffIcon from "@/../../public/fluent--eye-off-20-filled.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomerDetailsAsync,
  getCustomerInfo,
  updateCustomerDetailsAsync,
} from "@/redux/slice/customerProfile/customerProfileSlice";

const AccountDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const customerInformation = useSelector(getCustomerInfo);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    gender: "",
    birthday: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [gender, setGender] = useState(formData.gender);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/consumer/signup");
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  useEffect(() => {
    if (customerInformation) {
      const data = customerInformation || {};

      setFormData({
        name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
        email: data.email || "",
        contactNumber: data.mobile || "",
        address: [
          data.house_or_building,
          data.road_or_area,
          data.landmark,
          data.address_1,
          data.address_2,
          data.city,
          data.state,
          data.zipcode,
          data.country,
        ]
          .filter(Boolean)
          .join(", "),
        gender: customerInformation?.userDetails?.gender || "",
        birthday: customerInformation?.userDetails?.birthday || "",
        password: customerInformation?.userDetails?.password || "",
      });
    }
  }, [customerInformation]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleEdit = () => {
    setEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenderChange = (value) => {
    setGender(value);
    setFormData((prevData) => ({ ...prevData, gender: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const updateCustomerInfoApiCall = () => {
    dispatch(updateCustomerDetailsAsync(formData));
  };

  useEffect(() => {
    dispatch(getCustomerDetailsAsync());
  }, []);

  return (
    <ConsumerLayout>
      <div className="flex relative">
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        )}
        <div
          className={`absolute md:static my-2 bg-gray-100 min-w-max w-full md:w-1/4 border-2 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-30`}
        >
          <AccountDetailsSidebar />
          <button
            onClick={toggleSidebar}
            className={`fixed top-4 md:hidden z-50 ${
              isSidebarOpen ? "right-3" : "-right-12"
            }`}
          >
            <Image
              src={isSidebarOpen ? CrossIcon : HamburgerIcon}
              alt="account-icon"
              className="cursor-pointer w-10 h-10"
            />
          </button>
        </div>

        <div className="my-6 mx-12 w-full">
          <h1 className="font-bold italic text-4xl flex justify-center md:block w-full">
            <u>P r</u> o f i l e
          </h1>
          {isEditing ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="text-2xl italic my-5 col-span-full">
                <u>Pers</u>onal information
              </div>
              <div>
                <label className="block text-sm italic my-2">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 italic bg-gray-50 focus:bg-white focus:border-red-500 focus:outline-none transition"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm italic my-2">
                  Email address:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 italic bg-gray-50 focus:bg-white focus:border-red-500 focus:outline-none transition"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm italic my-2">
                  Contact number:
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      +91
                    </span>
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full border rounded-r-md px-3 py-2 italic bg-gray-50 focus:bg-white focus:border-red-500 focus:outline-none transition"
                    />
                  </div>
                </label>
              </div>
              <div>
                <label className="block text-sm italic my-1">Gender:</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="italic">
                      {gender !== ""
                        ? `Gender selected: ${gender}`
                        : "Select gender"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="italic">
                      Select gender
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={gender}
                      onValueChange={handleGenderChange}
                    >
                      <DropdownMenuRadioItem value="Male" className="italic">
                        Male
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Female" className="italic">
                        Female
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <label className="block text-sm italic my-2">
                  Date of birth:
                  <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 italic bg-gray-50 focus:bg-white focus:border-red-500 focus:outline-none transition"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm italic my-2">
                  Password:
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full border rounded px-3 py-2 italic pr-10 bg-gray-50 focus:bg-white focus:border-red-500 focus:outline-none transition`}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <Image
                        src={isPasswordVisible ? EyeOffIcon : EyeIcon}
                        alt="toggle password visibility"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </label>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  onClick={updateCustomerInfoApiCall}
                  className="hover:bg-red-200 border-2 border-red-200 italic px-6 py-2 rounded shadow-md transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={toggleEdit}
                  className="hover:bg-gray-200 border-2 border-red-200 italic px-6 py-2 rounded shadow-md ml-2 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div id="info">
              <div className="text-2xl italic my-5">
                <u>Pers</u>onal information
              </div>
              <div className="text-sm italic my-5">Name: {formData.name}</div>
              <div className="text-sm italic my-5">
                Email address: {formData.email}
              </div>
              <div className="text-sm italic my-5">
                Contact number: {formData.contactNumber}
              </div>
              <div className="text-sm italic my-5">
                Gender: {formData.gender}
              </div>
              <div className="text-sm italic my-5">
                Date of birth: {formData.birthday}
              </div>
              <div className="text-sm italic my-5">
                Password: {"*".repeat(formData.password.length)}
              </div>
              <button
                onClick={toggleEdit}
                className="border border-red-700 text-red-500 hover:bg-red-100 px-4 py-2 rounded italic absolute top-0 right-0 mr-6 mt-6"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default AccountDetails;
