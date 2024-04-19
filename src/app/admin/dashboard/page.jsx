"use client"

import Layout from "@/components/layout";
import DashboardButtons from "@/components/dashboardButtons";
import DashboardData from "@/components/dashboardData";
import SetPriceOfMetalForm from "@/components/setPriceOfMetalForm"
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [priceOfMetal, setPriceOfMetal] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push('/admin/login'); // Redirect to login page if token is not found
    }
  }, [router]);

  const hideSuccess = () => {
    setSuccess(false);
  }

  return (
    <>
      {success && <div
        // className="bg-red-100 flex justify-between items-center border border-red-400 text-red-700 px-4 py-3 rounded relative"
        className="bg-green-100 flex justify-between items-center border border-green-400 text-green-700 px-4 py-3 rounded fixed top-0 left-0 right-0"
        role="success"
        style={{ zIndex: 1001 }}
      >
        <strong className="font-bold">Gold and silver rates updated successfully</strong>
        <button
          onClick={hideSuccess}
          className="relative top-0.5 bottom-0 left-1"
        >
          <span className="text-green-500 text-2xl">×</span>
        </button>
      </div>}
      <Layout>
        <div className="p-8">
          <DashboardButtons priceOfMetal={priceOfMetal} setPriceOfMetal={setPriceOfMetal} />
          <DashboardData />
          {priceOfMetal && <SetPriceOfMetalForm priceOfMetal={priceOfMetal} setPriceOfMetal={setPriceOfMetal} setSuccess={setSuccess} isOpen={true} />}
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;

