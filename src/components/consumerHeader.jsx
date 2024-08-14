"use client";

import SidebarLogo from "../../public/assets/LOGO.png";
import SearchIcon from "../../public/assets/Icons/searchIcon.svg";
import Image from "next/image";
import ShoppingBag from "../../public/assets/heroicons--shopping-bag.png";
import AccountIcon from "../../public/assets/account-icon.png";
import LoginIcon from "@/../../public/clarity--login-line.png";
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
import { useState } from "react";
import Popup from "@/components/otpPopup";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import DrawerOnHeader from "@/components/drawerOnHeader";

export default function ConsumerHeader() {
  const [isChecked, setIsChecked] = useState(false);
  const [otpPopUpStatus, setOtpPopUpStatus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedMetal, setSelectedMetal] = useState("");

  const handleMouseEnter = (metal) => {
    setSelectedMetal(metal);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleOtpPopUp = () => {
    setIsChecked(false);
    setOtpPopUpStatus(true);
  };

  const togglePopup = () => {
    setOtpPopUpStatus(false);
  };

  return (
    <>
      <div
        id="mainHeader"
        className="w-full bg-[#BB1140] md:h-20 h-auto flex md:flex-row flex-col items-center border justify-between"
      >
        <Link
          href="/consumerHomepage"
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
          className="flex px-4 space-x-4 md:static absolute top-10 right-2"
        >
          <Popup show={otpPopUpStatus} handleClose={togglePopup}>
            <div className="flex flex-col items-center space-y-7">
              <h2 className="text-3xl italic text-[#BB1140]">LOGIN</h2>
              <p className="italic text-sm">
                Enter the OTP received on your contact number
              </p>
              <div>
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                  <InputOTPGroup>
                    <InputOTPSlot className="border-[#BB1140]" index={0} />
                    <InputOTPSlot className="border-[#BB1140]" index={1} />
                    <InputOTPSlot className="border-[#BB1140]" index={2} />
                    <InputOTPSlot className="border-[#BB1140]" index={3} />
                    <InputOTPSlot className="border-[#BB1140]" index={4} />
                    <InputOTPSlot className="border-[#BB1140]" index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div>
                <Button className="italic">Submit</Button>
              </div>
            </div>
          </Popup>

          <Link
            href="/consumerHomepage/accountDetails"
            className=""
            id="account"
          >
            <Image
              src={AccountIcon}
              alt="account-icon"
              className="cursor-pointer w-6 h-6"
            />
          </Link>

          {/* <div id="notification">
            <Image
              src={NotificationIcon}
              alt="account-icon"
              className="cursor-pointer w-7 h-7"
            />
          </div> */}

          <Link href="/consumerHomepage/cartPage" id="cart">
            <Image
              src={ShoppingBag}
              alt="account-icon"
              className="cursor-pointer w-6 h-6"
            />
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div id="login">
                <Image
                  src={LoginIcon}
                  alt="account-icon"
                  className="cursor-pointer w-6 h-6"
                />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="flex p-7 w-5/6 flex-col">
              <AlertDialogHeader className="flex flex-col items-center">
                <AlertDialogTitle className="text-3xl italic text-[#BB1140]">
                  LOGIN
                </AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
              </AlertDialogHeader>

              <div className="grid w-full items-center gap-1.5 mt-5">
                <Label
                  htmlFor="email"
                  className="font-semibold text-base italic"
                >
                  Enter contact number
                </Label>
                <Input
                  type="number"
                  id="number"
                  placeholder=""
                  className="italic"
                />
              </div>
              <div className="flex items-center space-x-2">
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
                  onClick={handleOtpPopUp}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
          <Link href="/consumerHomepage/productsListingPage">
            <div className="relative active:border-b-4 italic border-[#BB1140] px-1 h-full flex items-center cursor-pointer">
              <span className="hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:transform after:scale-x-0 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#BB1140]">
                All jewellery
              </span>
            </div>
          </Link>

          <Link href="/consumerHomepage/productsListingPage">
            <div
              onMouseEnter={() => handleMouseEnter("Gold")}
              className="relative active:border-b-4 italic border-[#BB1140] px-1 h-full flex items-center cursor-pointer"
            >
              {" "}
              <span className="hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:transform after:scale-x-0 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#BB1140]">
                Gold
              </span>
            </div>
          </Link>

          <Link href="/consumerHomepage/productsListingPage">
            <div
              onMouseEnter={() => handleMouseEnter("Silver")}
              className="relative active:border-b-4 italic border-[#BB1140] px-1 h-full flex items-center cursor-pointer"
            >
              {" "}
              <span className="hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:transform after:scale-x-0 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#BB1140]">
                Silver
              </span>
            </div>
          </Link>

          <Link href="/consumerHomepage/productsListingPage">
            <div
              onMouseEnter={() => handleMouseEnter("Platinum")}
              className="relative active:border-b-4 italic border-[#BB1140] px-1 h-full flex items-center cursor-pointer"
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
