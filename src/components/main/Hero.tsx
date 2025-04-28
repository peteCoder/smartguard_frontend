import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-[70rem] mx-auto flex flex-col-reverse sm:flex-row pt-3 sm:items-center p-2">
        <div className="sm:basis-1/2 mb-4">
          <h2 className="text-2xl md:text-4xl text-[#0093b9] mb-4 font-bold text-center sm:text-left leading-tight">
            Advanced URL & QR Code Threat Detection
          </h2>
          <p className="text-sm md:text-base text-white sm:max-w-[480px] text-center sm:text-left">
            Scan, detect, and analyze URLs or QR codes for potential threats.
            Identify phishing, quishing, domain hijacking, and suspicious links 
            with our intelligent threat analysis system.
          </p>

          <div className="flex items-center justify-center sm:justify-start">
            <Button asChild variant={"secondary"} className="mt-6">
              <a href="/">
                USE THE CHECKER TOOL
              </a>
            </Button>
          </div>
        </div>

        <div className="sm:basis-1/2 mb-4">
          <img src="/security.png" alt="Security Illustration" className="w-full max-w-[500px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
