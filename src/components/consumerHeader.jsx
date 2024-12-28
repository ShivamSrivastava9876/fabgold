"use client";

import SidebarLogo from "../../public/assets/LOGO.png";
import SearchIcon from "../../public/assets/Icons/searchIcon.svg";
import Image from "next/image";
import ShoppingBag from "../../public/assets/heroicons--shopping-bag.png";
import AccountIcon from "../../public/assets/account-icon.png";
import LoginIcon from "@/../../public/clarity--login-line.png";
import WishlistIcon from "@/../../public/mdi--heart-outline.png";

import LogoutIcon from "@/../../public/material-symbols--logout.png";
import NotificationIcon from "../../public/assets/mingcute--notification-line.png";
import LoginImage from "@/../../public/image-46.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import Popup from "@/components/otpPopup";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import DrawerOnHeader from "@/components/drawerOnHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  clearResponseState,
  getResponseData,
  loginCustomerAsync,
} from "@/redux/slice/customerProfile/customerProfileSlice";
import { useRouter } from "next/navigation";

export default function ConsumerHeader() {
  const dispatch = useDispatch();
  const router = useRouter();

  const responseAfterLoginOrSignup = useSelector(getResponseData)?.message;
  const responseAfterLoginOrSignupStatus = useSelector(getResponseData)?.success;

  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [categories, setCategories] = useState([]);
  const [selectedMetal, setSelectedMetal] = useState("");

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkToken(); // Initial check

    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === "token") {
        checkToken();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router]);

  useEffect(() => {
    if (responseAfterLoginOrSignup) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        dispatch(clearResponseState());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [responseAfterLoginOrSignup]);

  const handleMouseEnter = (metal) => {
    setSelectedMetal(metal);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleLogin = () => {
    dispatch(loginCustomerAsync({ username: email, password })).then(
      (result) => {
        if (loginCustomerAsync.fulfilled.match(result)) {
          router.push("/consumer/accountDetails");
        }
      }
    );
  };

  return (
    <>
      {showMessage && (
        <div
          className={`p-4 rounded-md text-center italic ${
            responseAfterLoginOrSignupStatus
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {responseAfterLoginOrSignup}
        </div>
      )}
      <div
        id="mainHeader"
        className="w-full bg-[#BB1140] md:h-20 h-auto flex md:flex-row flex-col items-center border justify-between"
      >
        <Link
          href="/consumer"
          id="logo"
          className="text-xl font-bold text-white flex mr-auto"
        >
          <Image
            src={SidebarLogo}
            width={80}
            height={80}
            alt="logo"
            objectFit="contain"
            objectPosition="center"
            className="mt-2"
          />
        </Link>
        <div id="searchBar" className="w-full md:w-3/4 bg-[#BB1140]">
          <form
            onSubmit={(e) => handleCategorySearch(e)}
            className="flex items-center m-2 md:w-2/3 border-2 border-solid border-gray-300 rounded-full px-4 py-2"
          >
            <input
              type="search"
              placeholder=""
              className="w-full h-full text-white outline-none bg-transparent text-blue-gray-700 appearance-none"
            />
            <div className="ml-2">
              <Image
                src={SearchIcon}
                alt="search-icon"
                className="cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div
          id="accountIcons"
          className="flex items-center px-4 space-x-4 md:static absolute top-10 right-2"
        >
          {isLoggedIn && (
            <Link
              href="/consumer/accountDetails"
              className=""
              id="account"
            >
              <Image
                src={AccountIcon}
                alt="account-icon"
                className="cursor-pointer w-6 h-6"
              />
            </Link>
          )}

          {!isLoggedIn && (
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onClick={() => setIsHovered((prev) => !prev)}
            >
              <Image
                src={AccountIcon}
                alt="login-icon"
                className="cursor-pointer w-6 h-6"
              />
              {isHovered && (
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  // onMouseLeave={() => setIsHovered(false)}
                  className="absolute italic sm:min-w-max z-30 mt-7 -left-10 sm:-left-52 transform -translate-x-1/2 p-4 bg-white border border-gray-300 shadow-lg"
                >
                  <div className="mb-4 text-lg ">
                    <u className="underline-offset-4">You</u>r Account
                  </div>
                  <div className="mb-4 text-sm">
                    Track your orders, manage payment, edit profile and much
                    more..
                  </div>
                  <div className="flex justify-between w-full space-x-3">
                    <Button
                      onClick={() => setIsDialogOpen(true)}
                      className="block italic w-full mb-2 py-1 px-2 text-center rounded-none border bg-red-400 border-red-400 hover:"
                    >
                      Login
                    </Button>
                    <Link href="/consumer/signup" className="w-full">
                      <Button className="block italic w-full py-1 px-2 text-center border rounded-none bg-red-400 border-red-400 text-white">
                        Signup
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          <Link href="/consumer/cartPage" id="cart">
            <Image
              src={WishlistIcon}
              alt="account-icon"
              className="cursor-pointer w-6 h-6"
            />
          </Link>

          <Link href="/consumer/cartPage" id="cart">
            <Image
              src={ShoppingBag}
              alt="account-icon"
              className="cursor-pointer w-6 h-6"
            />
          </Link>

          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            {/* <AlertDialogTrigger asChild>
              <div id="login">
                <Image
                  src={LoginIcon}
                  alt="login-icon"
                  className="cursor-pointer w-6 h-6"
                />
              </div>
            </AlertDialogTrigger> */}
            <AlertDialogContent className="flex p-7 w-5/6 flex-col">
              <AlertDialogHeader className="flex flex-col items-center">
                <AlertDialogTitle className="text-3xl italic text-[#BB1140]">
                  LOGIN
                </AlertDialogTitle>
                <AlertDialogDescription className="italic">
                  Please enter your email address and password to log in.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <div className="grid w-full items-center gap-1.5 mt-5">
                <Label
                  htmlFor="email"
                  className="font-semibold text-base italic"
                >
                  Email address
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="italic"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid w-full items-center gap-1.5 mt-5">
                <Label
                  htmlFor="password"
                  className="font-semibold text-base italic"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="italic"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2 mt-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="form-checkbox h-4 w-4 text-[#BB1140] border-gray-300 rounded focus:ring-[#BB1140]"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-semibold italic leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
              <label
                htmlFor="terms"
                className="text-sm font-semibold italic leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                By continuing, I agree to <u>terms and conditions</u> &{" "}
                <u>privacy policy</u>
              </label>

              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel
                  className="italic"
                  onClick={() => setIsChecked(false)}
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className={`bg-[#BB1140] italic ${
                    !isChecked ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!isChecked}
                  onClick={handleLogin}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* <Link href="/consumer" className="" id="logout">
            <Image
              src={LogoutIcon}
              alt="logout-icon"
              className="cursor-pointer w-6 h-6"
            />
          </Link> */}

          {/* <Button className="italic bg-red-400">Register</Button> */}
        </div>
      </div>

      <div
        id="slider"
        onMouseLeave={() => handleMouseEnter("")}
        className="h-10 flex relative justify-center items-center"
      >
        <div
          id="components"
          className="flex items-center space-x-12 px-5 h-full overflow-x-scroll no-scrollbar font-semibold text-gray-600 text-sm whitespace-nowrap"
        >
          <Link href="/consumer/Product-List">
            <div className="relative italic px-1 h-full flex items-center cursor-pointer">
              <span className="hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:transform after:scale-x-0 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#BB1140]">
                All jewellery
              </span>
            </div>
          </Link>

          <Link href="/consumer/productsListingPage">
            <div
              onMouseEnter={() => handleMouseEnter("Gold")}
              className="relative italic px-1 h-full flex items-center cursor-pointer"
            >
              {" "}
              <span className="hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:transform after:scale-x-0 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#BB1140]">
                Gold
              </span>
            </div>
          </Link>

          <Link href="/consumer/productsListingPage">
            <div
              onMouseEnter={() => handleMouseEnter("Silver")}
              className="relative italic px-1 h-full flex items-center cursor-pointer"
            >
              {" "}
              <span className="hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:transform after:scale-x-0 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#BB1140]">
                Silver
              </span>
            </div>
          </Link>

          <Link href="/consumer/productsListingPage">
            <div
              onMouseEnter={() => handleMouseEnter("Platinum")}
              className="relative italic px-1 h-full flex items-center cursor-pointer"
            >
              {" "}
              <span className="hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:transform after:scale-x-0 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#BB1140]">
                Platinum
              </span>
            </div>
          </Link>
          <div className=" italic">More</div>
        </div>

        {selectedMetal && (
          <DrawerOnHeader
            selectedMetal={selectedMetal}
            setSelectedMetal={setSelectedMetal}
          />
        )}
      </div>
    </>
  );
}
