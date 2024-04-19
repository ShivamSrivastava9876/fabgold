"use client"

import Layout from "@/components/layout";
import CategoryButtons from "@/components/categoryButtons";
import CategoryTables from "@/components/categoryTables";
import AddCategory from "@/components/addCategory"
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Category = () => {
  const [addCategory, setAddCategory] = useState(false);
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
        <CategoryButtons addCategory={addCategory} setAddCategory={setAddCategory}/>
        <CategoryTables />
        {addCategory && <AddCategory addCategory={addCategory} setAddCategory={setAddCategory}/>}
      </div>
    </Layout>
  );
};

export default Category;

