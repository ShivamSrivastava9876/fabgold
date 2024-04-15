"use client"

import Layout from "@/components/layout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ReportBarGraph from "../../components/orderReportGraph";

const Report = () => {
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
        <ReportBarGraph />
      </div>
    </Layout>
  );
};

export default Report;

