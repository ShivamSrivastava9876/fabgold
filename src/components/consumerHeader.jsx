import SidebarLogo from "../../public/assets/LOGO.png";
import SearchIcon from "../../public/assets/Icons/searchIcon.svg";
import Image from "next/image";
import ShoppingBag from "../../public/assets/heroicons--shopping-bag.png";
import AccountIcon from "../../public/assets/account-icon.png";
import NotificationIcon from "../../public/assets/mingcute--notification-line.png"

export default function ConsumerHeader() {
    return (
        <>
            <div id="mainHeader" className="w-full bg-[#BB1140] md:h-20 h-auto flex md:flex-row flex-col items-center border justify-between">
                <div id="logo" className="text-xl font-bold text-white flex mr-auto">
                    <Image
                        src={SidebarLogo}
                        width={80}
                        height={80}
                        alt="logo"
                        objectFit="contain"
                        objectPosition="center"
                        className="mt-2"
                    />
                </div>
                <div id="searchBar" className="w-full md:w-3/4 bg-[#BB1140]">
                    <form onSubmit={(e) => handleCategorySearch(e)} className="flex items-center m-2 md:w-2/3 border-2 border-solid border-gray-300 rounded-full px-4 py-2">
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
                <div id="accountIcons" className="flex px-4 space-x-4 md:static absolute top-10 right-2">
                    <div id="account">
                        <Image
                            src={AccountIcon}
                            alt="account-icon"
                            className="cursor-pointer w-6 h-6"
                        />
                    </div>
                    <div id="notification">
                        <Image
                            src={NotificationIcon}
                            alt="account-icon"
                            className="cursor-pointer w-6 h-6"
                        />
                    </div>
                    <div id="cart">
                        <Image
                            src={ShoppingBag}
                            alt="account-icon"
                            className="cursor-pointer w-6 h-6"
                        />
                    </div>
                </div>
            </div>
            <div id="slider" className="h-10 flex justify-center items-center">
                <div id="components" className="flex items-center space-x-12 px-5 h-full overflow-x-scroll no-scrollbar font-semibold text-gray-600 text-sm whitespace-nowrap">
                    <div className=" active:border-b-4 hover:border-b-4 border-red-600 px-1 h-full flex items-center cursor-pointer">All</div>
                    <div className="active:border-b-4 hover:border-b-4 border-red-600 px-1 h-full flex items-center cursor-pointer">Gold</div>
                    <div className="active:border-b-4 hover:border-b-4 border-red-600 px-1 h-full flex items-center cursor-pointer">Silver</div>
                    <div className="active:border-b-4 hover:border-b-4 border-red-600 px-1 h-full flex items-center cursor-pointer">Platinum</div>
                    <div className="">More</div>
                </div>
            </div>
        </>
    );
}
