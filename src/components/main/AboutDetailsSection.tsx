const AboutDetailsSection = () => {
  return (
    <section className="pt-16 bg-[#08304b] text-white">
      <div className="max-w-[70rem] mx-auto px-6 md:px-10 space-y-20">
        {/* Why We Built This Tool */}
        <div>
          <h3 className="text-2xl md:text-3xl text-[#0093b9] font-bold text-center mb-10">
            Why We Built This Tool
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                In a world flooded with phishing links and disguised QR codes, staying safe online has become increasingly difficult.
                Attackers leverage social platforms, emails, and physical media to trick users into malicious traps.
                This tool was developed to combat that threat.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                Our detection engine performs deep analysis on domains, flags suspicious behaviors like typosquatting or spoofing,
                and generates a comprehensive threat score to help users take informed action—fast and securely.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Whether you’re a cybersecurity analyst, an IT team, or simply cautious online, this tool gives you a smart and reliable line of defense.
              </p>
            </div>

            <div className="bg-[#0d4154de] p-6 rounded-lg shadow-md">
              <h4 className="text-[#4fb3d4] text-lg font-semibold mb-4">Key Highlights</h4>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base  text-gray-200">
                <li>Real-time scanning for links and QR codes</li>
                <li>Intelligent threat scoring based on threat intelligence databases</li>
                <li>Optional downloadable forensic reports</li>
                <li>Zero tracking — privacy-respecting by design</li>
                <li>Accessible interface for both experts and everyday users</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div>
          <h3 className="text-3xl text-[#0093b9] font-bold text-center mb-8">
            What Sets Us Apart
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Our platform empowers users to make informed cybersecurity decisions. We demystify threats by inspecting suspicious URLs and QR codes, 
            then present easy-to-understand risk assessments that help you stay protected—without needing a cybersecurity degree.
          </p>
        </div>

        {/* How It Works */}
        <div>
          <h4 className="text-[#4fb3d4] text-xl font-semibold mb-4 text-center">How It Works</h4>
          <div className="space-y-3 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
            <p><span className="font-bold text-white">1.</span> Submit a link or QR code for inspection.</p>
            <p><span className="font-bold text-white">2.</span> We analyze it using real-time threat intelligence and pattern recognition.</p>
            <p><span className="font-bold text-white">3.</span> Instantly receive a threat score and clear verdict.</p>
            <p><span className="font-bold text-white">4.</span> Optionally download a detailed report for further review or evidence.</p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-[#0d4154de] p-6 rounded-lg shadow-md">
          <h4 className="text-[#4fb3d4] text-xl font-semibold mb-4 text-center">
            Built to Be Trusted
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            <li>Military-grade architecture with encrypted processing</li>
            <li>Trusted by cybersecurity professionals and organizations</li>
            <li>Updated continuously to detect new and emerging threats</li>
            <li>We don’t log your scans or store personal data</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <h4 className="text-[#4fb3d4] text-xl font-semibold mb-4 text-center">
            What People Are Saying
          </h4>
          <div className="space-y-6 max-w-2xl mx-auto text-sm md:text-base text-gray-200">
            <blockquote className="border-l-4 border-[#4fb3d4] pl-4 italic">
              "Caught a suspicious QR code posted outside my office — could’ve been bad!"
            </blockquote>
            <blockquote className="border-l-4 border-[#4fb3d4] pl-4 italic">
              "Finally a security tool that doesn’t overwhelm with jargon. It just works."
            </blockquote>
          </div>
        </div>

        {/* Mission */}
        <div>
          <h4 className="text-[#4fb3d4] text-xl font-semibold mb-4 text-center">
            Our Mission
          </h4>
          <p className="text-gray-300 text-sm md:text-base text-center max-w-3xl mx-auto">
            We’re on a mission to make cybersecurity accessible for everyone. By simplifying threat detection
            and empowering users with insights, we aim to reduce digital risk across the globe—one scan at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailsSection;
