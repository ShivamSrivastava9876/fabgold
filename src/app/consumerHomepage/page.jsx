"use client"

import Layout from "@/components/layout";
import DashboardButtons from "@/components/dashboardButtons";
import DashboardData from "@/components/dashboardData";
import SetPriceOfMetalForm from "@/components/setPriceOfMetalForm"
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {

  const router = useRouter();

  return (
    <>
      <Layout>
        Hello
      </Layout>
    </>
  );
};

export default Dashboard;

