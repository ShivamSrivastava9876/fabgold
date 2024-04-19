"use client"

import Layout from "@/components/layout";
import OrderReportTable from "@/components/orderReports";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DailyReports = () => {
  const [addProduct, setAddProduct] = useState(false);
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
        {/* <OrderButtons /> */}
        <OrderReportTable  />
      </div>
    </Layout>
  );
};

export default DailyReports;

