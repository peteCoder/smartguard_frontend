import { Button } from "../ui/button";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { NavLink } from "react-router";
const Hero = () => {
  return (
    <div className="">
      <div className="max-w-[70rem] mx-auto flex flex-col-reverse sm:flex-row pt-3 sm:items-center p-2">
        <div className="sm:basis-1/2 mb-4">
        <FadeInWhenVisible>
          <h2 className="text-2xl md:text-4xl text-[#0093b9] mb-4 font-bold text-center sm:text-left leading-tight">
            Advanced URL & QR Code Threat Detection
          </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <p className="text-sm md:text-base text-white sm:max-w-[480px] text-center sm:text-left">
            Scan, detect, and analyze URLs or QR codes for potential threats.
            Identify phishing, quishing, domain hijacking, and suspicious links 
            with our intelligent threat analysis system.
          </p>
          </FadeInWhenVisible>

          <div className="flex items-center justify-center sm:justify-start">
            <FadeInWhenVisible>
            <Button asChild variant={"secondary"} className="mt-6">
              <NavLink to="/checker-tool">
                USE THE CHECKER TOOL
              </NavLink>
            </Button>
            </FadeInWhenVisible>
          </div>
        </div>

        <FadeInWhenVisible>
        <div className="sm:basis-1/2 mb-4">
          <img src="/security.png" alt="Security Illustration" className="w-full max-w-[500px] mx-auto" />
        </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Hero;
