import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import MiniAboutSection from "@/components/main/MiniAboutSection";
import Navbar from "@/components/main/Navbar"
import ServicesSection from "@/components/main/ServicesSection";

// MainColor = #03393b
const Home = () => {

  return (
 
    <div className="">
      <Navbar/>
      <main className="pt-[70px]">
        <Hero />
        <MiniAboutSection />
        <ServicesSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home;
