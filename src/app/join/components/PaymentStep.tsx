"use client";

import { useState } from "react";
import { Copy, Check, Upload, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormData } from "./types";

export default function PaymentStep({
  form,
  onNext,
}: {
  form: FormData;
  onNext: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const tx = "ASVA-" + Math.random().toString(36).slice(2, 10);

  const copy = () => {
    navigator.clipboard.writeText(tx);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Payment</h1>

      <div className="bg-green-50 p-5 rounded-2xl">
        <p className="text-sm">Transaction ID</p>

        <div className="flex justify-between mt-2 bg-white p-3 rounded-xl">
          <span className="font-mono">{tx}</span>
          <button onClick={copy} className="text-green-600 text-sm">
            {copied ? "Copied" : <Copy size={14} />}
          </button>
        </div>
      </div>

      <Button
        onClick={async () => {
          setLoading(true);
          await new Promise((r) => setTimeout(r, 1000));
          setLoading(false);
          onNext();
        }}
        className="bg-green-500 h-11 rounded-xl"
      >
        {loading && <Loader2 className="animate-spin mr-2" size={16} />}
        I've Paid
      </Button>
    </div>
  );
}