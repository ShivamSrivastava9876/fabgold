"use client"

import Layout from "@/components/layout";
import ProductButtons from "@/components/productButtons";
import ProductTables from "@/components/productTables";
import AddProduct from "@/components/addProduct"
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Products = () => {
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
        <ProductButtons addProduct={addProduct} setAddProduct={setAddProduct}/>
        <ProductTables />
        {addProduct && <AddProduct addProduct={addProduct} setAddProduct={setAddProduct}/>}
      </div>
    </Layout>
  );
};

export default Products;

