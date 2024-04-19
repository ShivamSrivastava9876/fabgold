"use client"

import Layout from "@/components/layout";
import UserReportTable from "@/components/userReportTable";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const UserReports = () => {
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
        <UserReportTable />
      </div>
    </Layout>
  );
};

export default UserReports;

