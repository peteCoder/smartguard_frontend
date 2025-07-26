export interface DomainAnalysisType {
    domain: string;
    is_ip: boolean;
    has_https: boolean;
    is_shortened: boolean;
    tld: string;
    typosquatting_score: number;
    domain_age_days: number | null;
    safe: boolean;
    whois: {
      domain_name: string | null;
      registrar: string | null;
      name_servers: string[] | null;
      status: string[] | null;
      emails: string[] | null;
      owner: string | null;
      organization: string | null;
      creation_date: string | null;
      expiry_date: string | null;
      age_days: number | null;
      error: string | null;
    };
    external_urlscan_check: {
      safe: boolean | null;
      verdict: string | null;
      tags: string[];
      score: number | null;
      screenshot: string | null;
      error: string | null;
    };
    external_google_safe_check?: {
      safe: boolean | null;
      details: {
        threatType: string;
        platformType: string;
        threat: {
          url: string;
        };
        cacheDuration: string;
        threatEntryType: string;
      }[];
      error: string | null;
    };
};



export interface MLPhishingPrediction {
  domain: string;
  tld: string;
  is_phishing: boolean;
  confidence: number;
  features_used: {
    domain_length: number;
    num_digits: number;
    num_hyphens: number;
    has_https: number;
    num_subdomains: number;
    tld: number;
    is_suspicious_tld: number;
    typosquatting_score: number;
    is_shortened: number;
  };
  whois: {
    domain_name: string | null;
    registrar: string | null;
    name_servers: string[] | null;
    status: string[] | string | null;
    emails: string[] | string | null;
    owner: string | null;
    organization: string | null;
    creation_date: string | null;
    expiry_date: string | null;
    age_days: number | null;
    error: string | null;
  };
  deceptive_pattern_detected: boolean;
  warning: string | null;
  risk_score: number;
  risk_level: string;
}







