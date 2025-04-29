import { FadeInWhenVisible } from "./FadeInWhenVisible";

const MiniAboutSection = () => {
  return (
    <FadeInWhenVisible>
    <section className="py-12 bg-[#0d4154de]">
      <div className="max-w-[70rem] mx-auto p-4 text-center">
        <h3 className="text-2xl md:text-3xl text-[#0093b9] font-bold mb-6">
          About This Tool
        </h3>
        <p className="text-white text-sm md:text-base max-w-[700px] mx-auto">
          Our platform empowers you to detect malicious URLs and QR codes easily.
          Using a combination of domain analysis, threat indicators, and smart detection techniques,
          we help you stay safe from phishing, scams, and emerging cyber threats.
        </p>
      </div>
    </section>
    </FadeInWhenVisible>
  );
};

export default MiniAboutSection;
