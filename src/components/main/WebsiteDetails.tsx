import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MLPhishingPrediction } from "@/config.types";
import { DownloadReportButton } from "./DownloadReportButton";

type DataType = MLPhishingPrediction | { extracted_text: string };

export const WebsiteDetails: React.FC<{ data: DataType }> = ({ data }) => {
  if ("extracted_text" in data) {
    return (
      <Card className="bg-[#2f1f1f] border-0 my-6 max-w-2xl mx-auto">
        <CardContent className="py-10 text-center">
          <p className="text-lg text-red-400 font-semibold">{data.extracted_text}</p>
        </CardContent>
      </Card>
    );
  }

  const SafeBadge = ({ safe }: { safe: boolean | null }) =>
    safe === null ? (
      <Badge variant="secondary">Unknown</Badge>
    ) : safe ? (
      <Badge className="bg-green-600">Safe</Badge>
    ) : (
      <Badge className="bg-red-600">Unsafe</Badge>
    );

  return (
    <Card className="bg-[#11394b] border-0 my-8 w-full mx-auto shadow-lg text-white">
      <CardContent className="p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{data.domain}</h2>
            <span className="text-xs text-gray-400">{data.tld && `.${data.tld}`}</span>
          </div>
          <div>
            <SafeBadge safe={!data.is_phishing} />
          </div>
        </div>

        {/* Warning */}
        {data.warning && (
          <div className="text-yellow-300 text-sm">{data.warning}</div>
        )}

        {/* General Info Table */}
        <div>
          <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">General Information</h3>
          <table className="w-full text-sm table-auto border-collapse border border-gray-700">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="font-medium px-2 py-1">HTTPS?</td>
                <td className="px-2 py-1">{data.features_used.has_https ? "Yes" : "No"}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="font-medium px-2 py-1">Shortened URL?</td>
                <td className="px-2 py-1">{data.features_used.is_shortened ? "Yes" : "No"}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="font-medium px-2 py-1">Typosquatting Score</td>
                <td className="px-2 py-1">{data.features_used.typosquatting_score}</td>
              </tr>
              <tr>
                <td className="font-medium px-2 py-1">Domain Age</td>
                <td className="px-2 py-1">
                  {data.whois.age_days !== null ? `${data.whois.age_days} days` : "Unknown"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* WHOIS Info Table */}
<div>
  <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">WHOIS Information</h3>
  {data.whois.error ? (
    <p className="text-red-400">{data.whois.error}</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm table-auto border-collapse border border-gray-700">
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Registrar</td>
            <td className="px-2 py-1">{data.whois.registrar ?? "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Domain Name</td>
            <td className="px-2 py-1">{data.whois.domain_name ?? "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Owner</td>
            <td className="px-2 py-1">{data.whois.owner ?? "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Organization</td>
            <td className="px-2 py-1">{data.whois.organization ?? "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Creation Date</td>
            <td className="px-2 py-1">{data.whois.creation_date ?? "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Expiry Date</td>
            <td className="px-2 py-1">{data.whois.expiry_date ?? "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Emails</td>
            <td className="px-2 py-1 break-words">
              {typeof data.whois.emails === "string"
                ? data.whois.emails
                : data.whois.emails?.join(", ") ?? "N/A"}
            </td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="font-medium px-2 py-1 whitespace-nowrap">Name Servers</td>
            <td className="px-2 py-1 break-words">
              {typeof data.whois.name_servers === "string"
                ? data.whois.name_servers
                : data.whois.name_servers?.join(", ") ?? "N/A"}
            </td>
          </tr>
          {data.whois.status && (
            <tr>
              <td className="font-medium px-2 py-1 whitespace-nowrap">Status</td>
              <td className="px-2 py-1 break-words">
                {typeof data.whois.status === "string"
                  ? data.whois.status
                  : data.whois.status?.join(", ") ?? "N/A"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )}
</div>


        {/* Model Features Table */}
        <div>
          <h3 className="text-lg text-[#33b4df] mb-2 font-semibold">Model Feature Values</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm table-auto border-collapse border border-gray-700">
              <thead>
                <tr className="bg-[#1f3c4d] border-b border-gray-700">
                  <th className="text-left px-2 py-1">Feature</th>
                  <th className="text-left px-2 py-1">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {Object.entries(data.features_used).map(([key, value]) => (
                  <tr key={key}>
                    <td className="capitalize px-2 py-1 text-gray-300">
                      {key.replace(/_/g, " ")}
                    </td>
                    <td className="px-2 py-1">
                      {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button */}
        <div className="h-[20vh] flex items-center justify-center">
          <DownloadReportButton />
        </div>
      </CardContent>
    </Card>
  );
};
