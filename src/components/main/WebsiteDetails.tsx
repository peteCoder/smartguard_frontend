import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
import { DomainAnalysisType } from "@/config.types";

type DataType = DomainAnalysisType | { extracted_text: string };

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
            <SafeBadge safe={data.safe} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">General</h3>
            <ul className="text-sm space-y-1">
              <li>
                <span className="font-medium">IP Address?</span>{" "}
                {data?.is_ip ? "Yes" : "No"}
              </li>
              <li>
                <span className="font-medium">HTTPS?</span>{" "}
                {data?.has_https ? "Yes" : "No"}
              </li>
              <li>
                <span className="font-medium">Shortened URL?</span>{" "}
                {data?.is_shortened ? "Yes" : "No"}
              </li>
              <li>
                <span className="font-medium">Typosquatting Score:</span>{" "}
                {data?.typosquatting_score}
              </li>
              <li>
                <span className="font-medium">Domain Age:</span>{" "}
                {data?.domain_age_days !== null ? `${data?.domain_age_days} days` : "Unknown"}
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

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">URLScan Check</h3>
            {data.external_urlscan_check.error ? (
              <div className="text-red-400">{data.external_urlscan_check.error}</div>
            ) : (
              <ul className="text-sm space-y-1">
                <li>
                  <span className="font-medium">Verdict:</span>{" "}
                  {data.external_urlscan_check.verdict ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Safe?</span>{" "}
                  <SafeBadge safe={data.external_urlscan_check?.safe} />
                </li>
                <li>
                  <span className="font-medium">Score:</span>{" "}
                  {data.external_urlscan_check.score ?? "-"}
                </li>
                <li>
                  <span className="font-medium">Tags:</span>{" "}
                  {data.external_urlscan_check.tags?.length
                    ? data.external_urlscan_check.tags.join(", ")
                    : "-"}
                </li>
                {data?.external_urlscan_check.screenshot && (
                  <li className="mt-3">
                    <span className="font-medium block mb-1">Screenshot:</span>
                    <img
                      src={data.external_urlscan_check.screenshot}
                      alt="URLScan Screenshot"
                      className="max-w-xs rounded border border-gray-800 shadow"
                    />
                  </li>
                )}
              </ul>
            )}
          </div>
          <div>
            <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">Google Safe Browsing</h3>
            {!data.external_google_safe_check ? (
              <div className="text-gray-400">No data</div>
            ) : data.external_google_safe_check.error ? (
              <div className="text-red-400">{data.external_google_safe_check.error}</div>
            ) : (
              <ul className="text-sm space-y-1">
                <li>
                  <span className="font-medium">Safe?</span>{" "}
                  <SafeBadge safe={data.external_google_safe_check.safe} />
                </li>
                <li>
                  <span className="font-medium">Threats:</span>{" "}
                  {data.external_google_safe_check.details?.length
                    ? data.external_google_safe_check.details
                        .map((d) => d.threatType)
                        .join(", ")
                    : "None"}
                </li>
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
