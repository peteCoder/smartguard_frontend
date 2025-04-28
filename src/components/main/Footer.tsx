import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#08304b] text-gray-300 py-10 mt-10">
      <div className="max-w-[70rem] mx-auto px-4 flex flex-col items-center">
        
        {/* Logo */}
        <NavLink to="/" className="mb-6">
          <img src="/logo_2.png" alt="Logo" className="w-[180px] h-auto" />
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 mb-6">
          <NavLink
            to="/"
            className="hover:text-[#4fb3d4] font-semibold uppercase text-sm"
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-[#4fb3d4] font-semibold uppercase text-sm"
          >
            About
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-[#4fb3d4] font-semibold uppercase text-sm"
          >
            Checker Tool
          </NavLink>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} SmartGuard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
