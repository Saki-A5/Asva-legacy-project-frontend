import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Step } from "./types";

export default function StepIndicator({ current }: { current: Step }) {
  const steps = [
    { n: 1, label: "Create Account" },
    { n: 2, label: "Pay Registration" },
    { n: 3, label: "Pending Verification" },
  ];

  const currentLabel = steps.find((s) => s.n === current)?.label;

  return (
    <div className="flex flex-col items-center gap-0 mb-10">
      {/* Dots + lines + labels (sm and above) */}
      <div className="flex items-center justify-center">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                  current > s.n
                    ? "bg-green-500 text-white"
                    : current === s.n
                    ? "bg-green-500 text-white ring-4 ring-green-100"
                    : "bg-gray-100 text-gray-400"
                )}
              >
                {current > s.n ? <Check size={14} /> : s.n}
              </div>

              {/* Label — only on sm+ */}
              <span
                className={cn(
                  "hidden sm:block text-[11px] font-medium whitespace-nowrap",
                  current >= s.n ? "text-green-600" : "text-gray-400"
                )}
              >
                {s.label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={cn(
                  "w-16 h-[2px] mx-1 mb-0 sm:mb-5 transition-all duration-500",
                  current > s.n ? "bg-green-400" : "bg-gray-200"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Single active label — only on mobile */}
      <div className="flex sm:hidden items-center gap-2 mt-3">
        <span className="text-xs text-gray-400">
          Step {current} of {steps.length}
        </span>
        <span className="text-gray-300">·</span>
        <span className="text-xs font-semibold text-green-600">
          {currentLabel}
        </span>
      </div>
    </div>
  );
}