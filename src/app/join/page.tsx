"use client";

import { useState } from "react";
import StepIndicator from "./components/StepIndicator";
import SignUpStep from "./components/SignUpStep";
import PaymentStep from "./components/PaymentStep";
import PendingStep from "./components/PendingStep";
import { Step, FormData } from "./components/types";

export default function JoinPage() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <StepIndicator current={step} />

        {step === 1 && (
          <SignUpStep
            onNext={(data) => {
              setFormData(data);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <PaymentStep
            form={formData}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && <PendingStep form={formData} />}
      </div>
    </div>
  );
}