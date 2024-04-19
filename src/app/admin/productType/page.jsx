"use client"

import Layout from "@/components/layout";
import ProductTypeButtons from "@/components/productTypeButtons";
import ProductTypeTables from "@/components/productTypeTables";
import AddProductType from "@/components/addProductType"
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Products = () => {
  const [addProductType, setAddProductType] = useState(false);
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
        <ProductTypeButtons addProductType={addProductType} setAddProductType={setAddProductType}/>
        <ProductTypeTables />
        {addProductType && <AddProductType addProductType={addProductType} setAddProductType={setAddProductType}/>}
      </div>
    </Layout>
  );
};

export default Products;

