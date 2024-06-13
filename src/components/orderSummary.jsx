import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const orderSummary = () => {
  return (
    <div
      id="proceed"
      className="my-8 lg:mr-8 flex flex-col items-center h-min w-full px-4 bg-white"
    >
      <div className="mt-2 mb-4 border-y w-full">
        <div className="text-lg italic underline mb-4">Order summary</div>
        <div className="text-sm italic mb-2">Subtotal: ₹ 4,32,900</div>
        <div className="text-sm italic mb-2">Discount: 30%</div>
        <div className="text-sm italic mb-2">You save: ₹ 72,323</div>
        <div className="text-sm italic mb-2">Total: ₹ 3,51,000</div>
      </div>
      <Link href="/" className="w-full">
        <Button className="text-sm italic rounded-sm h-8 w-full mb-6">
          Proceed
        </Button>
      </Link>
    </div>
  );
};

export default orderSummary;
