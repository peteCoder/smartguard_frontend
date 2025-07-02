import { ScanSearch, QrCode, ShieldAlert, FileSearch } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const services = [
  {
    title: "URL Scanning",
    description: "Analyze URLs for suspicious patterns, phishing attempts, and domain reputation issues.",
    icon: ScanSearch,
  },
  {
    title: "QR Code Detection",
    description: "Upload or scan QR codes to identify hidden malicious links and prevent 'quishing' attacks.",
    icon: QrCode,
  },
  {
    title: "Threat Scoring",
    description: "Get a detailed threat score based on domain age, TLDs, typosquatting indicators, and more.",
    icon: ShieldAlert,
  },
  {
    title: "Forensic Reports",
    description: "Download comprehensive analysis reports for auditing and security review purposes.",
    icon: FileSearch,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#08304b]">
      <div className="max-w-[70rem] mx-auto p-4 text-center">
        <FadeInWhenVisible>
        <h3 className="text-2xl md:text-3xl text-[#4fb3d4] font-bold mb-10">
          What You Can Do
        </h3>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInWhenVisible key={index}>
                <div className="bg-[#0d4154de] p-6 rounded-xl shadow-lg">
                  {/* Icon on top */}
                  <div className="flex justify-center mb-4">
                    <Icon size={40} color="#4fb3d4" />
                  </div>
                  {/* Title */}
                  <h4 className="text-white text-lg font-semibold mb-3">{service.title}</h4>
                  {/* Description */}
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
