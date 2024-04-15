"use client"

import Layout from "../../components/layout";
import UserButtons from "@/components/userButtons";
import UserTables from "@/components/userTables";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Users = () => {
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
        <UserButtons />
        <UserTables />
      </div>
    </Layout>
  );
};

export default Users;
