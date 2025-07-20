import { BACKEND_API_BASE_URL } from "@/config";
import { useReportStore } from "@/hooks/useReportStore";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";


const BASE_API_URL = BACKEND_API_BASE_URL;



export const DownloadReportButton = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { report } = useReportStore();

  const {
    domain,
    tld,
    is_phishing,
    confidence,
    features_used,
    whois,
    deceptive_pattern_detected,
    warning,
    risk_score,
    risk_level,
  } = report!;

  const payload = {
    domain,
    tld,
    is_phishing,
    confidence,
    features_used,
    whois,
    deceptive_pattern_detected,
    warning,
    risk_score,
    risk_level,
  };

  const downloadPDF = () => {
    setIsLoading(true);

    if (!payload) {
      setIsLoading(false);
      return alert("No data to print.");
    }

    fetch(`${BASE_API_URL}/api/generate-report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.blob())
      .then((blob) => {
        setIsLoading(false);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `smartguard_${domain}_report.pdf`;
        link.click();
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error generating report:", error);
        alert("Failed to generate report.");
      });
  };


  return (
    <Button disabled={isLoading} onClick={downloadPDF} className="bg-primary text-white px-4 py-2 rounded">
      {isLoading ? (
        <BeatLoader color="#fff" />
      ) : (
        <span>Download PDF Report</span>
      )}
    </Button>
  );
};
