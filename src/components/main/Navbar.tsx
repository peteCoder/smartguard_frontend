import { X, Menu  } from "lucide-react"
import { useLayoutEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router"
import { cn, navItems } from "@/lib/utils"


const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();


    

    // navigate("/")

    const goToPage = (link: string) => {
        setToggleNavbar(false);
        navigate(link);
    }

    useLayoutEffect(() => {
        const body = document.body;
        toggleNavbar ? 
            body.classList.add("no__scroll") : 
            body.classList.remove("no__scroll");

        window.scrollY > 4 ? console.log("yes") : console.log("no");
        console.log(window.screenY);

    }, [toggleNavbar]);

    
  return (
    <>
        <div className="fixed top-0 left-0 w-full z-[5]">
            <div className="w-full bg-[#08304b]">
                <div className="w-full h-[70px]  flex items-center justify-between font-bold  max-w-[70rem]  mx-auto p-2">
                    
                    {/* Logo */}
                    <NavLink to={"/"} className="w-[200px] inline-block">
                        <img className="w-full h-full" src="/logo_2.png" alt="logo" />
                    </NavLink>

                    <ul className="md:flex items-center gap-3 hidden" >
                        {navItems.map((item) => (
                            <div key={item.id} className={cn("text-white hover:text-[#0093b9] uppercase cursor-pointer", location.pathname === item.path && "text-[#0093b9]" )} onClick={() => goToPage(item.path)}>
                                {item.linkName}
                            </div>
                        ))}
                    </ul>

                    <div onClick={() => setToggleNavbar((prev) => !prev)} className="md:hidden block cursor-pointer">
                        <Menu className={cn(toggleNavbar && "hidden")} color="#fff" size={35} />
                        <X className={cn(!toggleNavbar && "hidden")} color="#fff" size={35} />
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            <div className={cn("md:hidden block bg-[#0093b9] duration-500 ease-in-out transition-all overflow-hidden", toggleNavbar ? "h-[calc(60vh-70px)]" : "h-0")}>
                <ul className="h-full flex items-start justify-start pt-[30px]  gap-10 flex-col p-4" >
                    {navItems.map((item) => (
                        <div key={item.id} className={cn("text-white font-bold uppercase cursor-pointer", location.pathname === item.path && "text-[#011b2c]" )} onClick={() => goToPage(item.path)}>{item.linkName}</div>
                    ))}
                </ul>
            </div>
        </div>
        
    </>
    
  )
}

export default Navbar;
