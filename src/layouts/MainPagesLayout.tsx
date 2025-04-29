import { useEffect, useState } from "react";

import { Outlet } from 'react-router';

import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';
import Preloader from "@/components/main/Preloader";



const MainPagesLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading time (or use real assets loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      <Preloader isLoading={loading} />
      {!loading && (
        <div>
          <Navbar />
          <main className="pt-[70px]">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default MainPagesLayout
