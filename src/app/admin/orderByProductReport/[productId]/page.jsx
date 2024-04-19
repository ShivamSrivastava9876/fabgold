"use client"

import Layout from "@/components/layout";
import OrderByProductData from "@/components/orderByProductData";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const OrderByProductReport = () => {
  const router = useRouter(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/admin/login'); // Redirect to login page if token is not found
    }
  }, [router]); 

  return (
    <Layout>
      <div className="p-8">
        <OrderByProductData />
      </div>
    </Layout>
  );
};

export default OrderByProductReport;
