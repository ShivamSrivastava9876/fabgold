import React from "react";
import ConsumerLayout from "../../../components/consumerLayout";
import Image from "next/image";
import ProductImageOne from "@/../../public/product-list/JE04059-YGP900_11_listfront.png";
import WishListImage from "@/../../public/ph--heart-thin.png";
import WishListAddedImage from "@/../../public/mdi--heart.png";
import Bin from "@/../../public/mdi--bin.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const CartPage = () => {
  const orders = [
    {
      productPhotoId: 101,
      photo: ProductImageOne,
      productId: "GLR116686-FXY20",
      productName: "Ethereal Essence Yellow Gold Ring for Women",
      quantity: 2,
      productPrice: "₹90,000",
      weight: "32.32gm",
      wishlist: true,
    },
    {
      productPhotoId: 101,
      photo: ProductImageOne,
      productId: "GLR116686-FXY21",
      productName: "Ethereal Essence Yellow Gold Ring for Women",
      quantity: 2,
      productPrice: "₹90,000",
      weight: "32.32gm",
      wishlist: false,
    },
    {
      productPhotoId: 101,
      photo: ProductImageOne,
      productId: "GLR116686-FXY21",
      productName: "Ethereal Essence Yellow Gold Ring for Women",
      quantity: 2,
      productPrice: "₹87,000",
      weight: "32.37gm",
      wishlist: true,
    },
  ];
  return (
    <ConsumerLayout>
      <div className="w-full my-6 flex font-lobster justify-center text-5xl md:text-7xl text-[#c14d6e] ">
        B a g
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3">
        <div className="col-span-2 ">
          {orders.map((order) => (
            <div
            key={order.productId}
              id="order"
              className="flex md:flex-row justify-center items-center flex-col p-5 md:p-10 bg-white border border-[#c14d6e] m-8"
            >
              <Image src={order.photo} className="h-48 w-48" />
              <div id="orderDetails" className="px-10 py-1">
                <div className="text-sm italic">{order.productName}</div>
                <div className="text-sm italic mb-3">
                  Product Id: {order.productId}
                </div>
                <div className="text-sm italic">Quantity: {order.quantity}</div>
                <div className="text-sm mb-5 italic">
                  Weight: {order.weight}
                </div>
                <div className="text-base italic">{order.productPrice}</div>

                <div className="flex items-center italic text-sm my-4 space-x-6">
                  <div className="flex items-center">
                    {order.wishlist ? (
                      <Image
                        src={WishListAddedImage}
                        alt={order.productName}
                        className="h-8 w-8 mr-2 cursor-pointer"
                      />
                    ) : (
                      <Image
                        src={WishListImage}
                        alt="wish"
                        className="h-8 w-8 mr-2 cursor-pointer"
                      />
                    )}{" "}
                    Manage wishlist
                  </div>
                  <div className="flex items-center">
                    <Image src={Bin} className="w-8 h-8 mr-2 cursor-pointer" />{" "}
                    <div>Remove</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          id="checkout"
          className="my-8 lg:mr-8 flex flex-col items-center h-min px-4 bg-white"
        >
          <div
          
            id="promocode"
            className="flex w-full max-w-sm my-4 items-center space-x-2"
          >
            <Input
              type="email"
              placeholder="Promocode"
              className="text-sm italic"
            />
          </div>
          <div className="mt-2 mb-4 border-y w-full">
            <div className="text-lg italic underline mb-4">Order summary</div>
            <div className="text-sm italic mb-2">Subtotal: ₹ 4,32,900</div>
            <div className="text-sm italic mb-2">Discount: 30%</div>
            <div className="text-sm italic mb-2">You save: ₹ 72,323</div>
            <div className="text-sm italic mb-2">Total: ₹ 3,51,000</div>
          </div>
          <Link href="/consumer/checkoutAccountDetails">
            <Button className="text-sm italic rounded-sm w-full mb-6">
              Place order
            </Button>
          </Link>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default CartPage;
