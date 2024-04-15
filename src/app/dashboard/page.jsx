"use client"

import { useRouter } from 'next/navigation';
import Layout from '../../components/layout';
import { useEffect } from 'react';

export default function Dashboard() {
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
                
            </div>
        </Layout>
    )
}