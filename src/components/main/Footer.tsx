import { NavLink, useLocation } from "react-router";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { cn, navItems } from "@/lib/utils";

const Footer = () => {

  const location = useLocation();
  return (
    <FadeInWhenVisible>
    <footer className="bg-[#08304b] text-gray-300 py-10 mt-10">
      
      <div className="max-w-[70rem] mx-auto px-4 flex flex-col items-center">
        
        {/* Logo */}
        <NavLink to="/" className="mb-6">
          <img src="/logo_2.png" alt="Logo" className="w-[180px] h-auto" />
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 mb-6">
          {navItems.map((item) => (
            <NavLink
            to={item.path}
            className={cn("hover:text-[#4fb3d4] font-semibold uppercase text-sm", location.pathname === item.path && "text-[#4fb3d4]")}
          >
            {item.linkName}
          </NavLink>
          ))}
          
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} SmartGuard. All rights reserved.
        </p>
      </div>
      
    </footer>
    </FadeInWhenVisible>
  );
};

export default Footer;
