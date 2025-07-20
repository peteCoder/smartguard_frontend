import { useEffect } from "react";
import { useReportStore } from "@/hooks/useReportStore";

// ClearReportOnRefresh is just a logic hook, not UI
export default function ClearReportOnRefresh() {
  const clearReport = useReportStore((state) => state.clearReport);

  useEffect(() => {
    // Detect page refresh using the `performance` API
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isRefresh = navEntries[0]?.type === "reload";

    if (isRefresh) {
      clearReport();
    }
  }, []);

  return null; 
}