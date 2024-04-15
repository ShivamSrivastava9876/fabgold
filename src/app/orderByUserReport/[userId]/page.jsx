"use client"

import Layout from "@/components/layout";
import OrderByUserData from "@/components/orderByUserData";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const OrderByUserReport = () => {
  const [addProduct, setAddProduct] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/login'); // Redirect to login page if token is not found
    }
  }, [router]); 

  return (
    <Layout>
      <div className="p-8">
        <OrderByUserData />
      </div>
    </Layout>
  );
};

export default OrderByUserReport;

