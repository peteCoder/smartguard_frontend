import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MLPhishingPrediction } from "@/config.types"; 

type ReportStore = {
  report: MLPhishingPrediction | null;
  setReport: (data: MLPhishingPrediction) => void;
  clearReport: () => void;
};

export const useReportStore = create<ReportStore>()(
  persist(
    (set) => ({
      report: null,
      setReport: (data) => set({ report: data }),
      clearReport: () => set({ report: null }),
    }),
    {
      name: "smartguard-report", // localStorage key
    }
  )
);