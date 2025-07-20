import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
import { MLPhishingPrediction } from "@/config.types";
import { DownloadReportButton } from "./DownloadReportButton";

type DataType = MLPhishingPrediction | { extracted_text: string };

export const WebsiteDetails: React.FC<{ data: DataType }> = ({ data }) => {
  if ("extracted_text" in data) {
    return (
      <Card className="bg-[#2f1f1f] border-0 my-6 max-w-2xl mx-auto">
        <CardContent className="py-10 text-center">
          <p className="text-lg text-red-400 font-semibold">
            {data.extracted_text}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Helper function
  const SafeBadge = ({ safe }: { safe: boolean | null }) =>
    safe === null ? (
      <Badge variant="secondary">Unknown</Badge>
    ) : safe ? (
      <Badge className="bg-green-600">Safe</Badge>
    ) : (
      <Badge className="bg-red-600">Unsafe</Badge>
    );

  return (
    <Card className="bg-[#11394b] border-0 my-8 max-w-3xl mx-auto shadow-lg text-white">
      <CardContent className="p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{data.domain}</h2>
            <span className="text-xs text-gray-400">{data.tld && `.${data.tld}`}</span>
          </div>
          <div>
            <SafeBadge safe={!data.is_phishing} />
          </div>
        </div>
        <p>{data.warning}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">General</h3>
            <ul className="text-sm space-y-1">
              {/* <li>
                <span className="font-medium">IP Address?</span>{" "}
                {data?.features_used. ? "Yes" : "No"}
              </li> */}
              <li>
                <span className="font-medium">HTTPS?</span>{" "}
                {data?.features_used.has_https ? "Yes" : "No"}
              </li>
              <li>
                <span className="font-medium">Shortened URL?</span>{" "}
                {data?.features_used.has_https ? "Yes" : "No"}
              </li>
              <li>
                <span className="font-medium">Typosquatting Score:</span>{" "}
                {data?.features_used.typosquatting_score}
              </li>
              <li>
                <span className="font-medium">Domain Age:</span>{" "}
                {data?.whois.age_days !== null ? `${data?.whois.age_days} days` : "Unknown"}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">WHOIS Info</h3>
            {data.whois.error ? (
              <div className="text-red-400">{data?.whois.error}</div>
            ) : (
              <ul className="text-sm space-y-1">
                <li>
                  <span className="font-medium">Registrar:</span>{" "}
                  {data?.whois.registrar ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Domain Name:</span>{" "}
                  {data?.whois.domain_name ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Owner:</span>{" "}
                  {data?.whois.owner ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Organization:</span>{" "}
                  {data?.whois.organization ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Creation Date:</span>{" "}
                  {data.whois.creation_date ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Expiry Date:</span>{" "}
                  {data.whois.expiry_date ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Emails:</span>{" "}

                  {typeof data?.whois.emails === "string" ? (
                      <span>
                        {data?.whois?.emails}
                      </span>
                    ): (
                      <span>
                        {data?.whois?.emails?.join(", ") ?? "-"}
                      </span>
                    )}
                </li>
                <li>
                  <span className="font-medium">Name Servers:</span>{" "}
                  {typeof data?.whois.name_servers === "string" ? (
                      <span>
                        {data?.whois?.name_servers}
                      </span>
                    ): (
                      <span>
                        {data?.whois?.name_servers?.join(", ") ?? "-"}
                      </span>
                    )}
                </li>
                {data.whois.status && (
                  <li>
                    <span className="font-medium">Status:</span>{" "}
                    {typeof data?.whois.status === "string" ? (
                      <span>
                        {data?.whois?.status}
                      </span>
                    ): (
                      <span>
                        {data?.whois?.status?.join(", ") ?? "-"}
                      </span>
                    )}
                    
                    
                  </li>
                )}
                
              </ul>
            )}
          </div>
        </div>

        
          <div className="h-[20vh] flex items-center justify-center">
            <DownloadReportButton />
          </div>
        
      </CardContent>
    </Card>
  );
};
