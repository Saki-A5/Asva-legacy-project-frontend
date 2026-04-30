"use client";

import { useState } from "react";
import { Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormData } from "./types";
import { API_URL } from "@/lib/config";

const ACCOUNT_NUMBER = "0123456789";
const ACCOUNT_NAME = "ASVA Student Association";
const BANK_NAME = "First Bank Nigeria";
const AMOUNT = "₦5,000";
const AMOUNT_VALUE = 5000;

export default function PaymentStep({
  form,
  onNext,
}: {
  form: FormData;
  onNext: () => void;
}) {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedTx, setCopiedTx] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tx = form.reference_code ?? "ASVA-UNKNOWN";

  const copyAccount = () => {
    navigator.clipboard.writeText(ACCOUNT_NUMBER);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 1500);
  };

  const copyTx = () => {
    navigator.clipboard.writeText(tx);
    setCopiedTx(true);
    setTimeout(() => setCopiedTx(false), 1500);
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/payments/claim`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference_code: tx,
          email: form.email,
          amount: AMOUNT_VALUE,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          data.reference_code?.[0] ??
          data.email?.[0] ??
          data.amount?.[0] ??
          "Something went wrong. Please try again."
        );
        return;
      }

      onNext();
    } catch {
      setError("Network error — is the server running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Complete Payment</h1>
        <p className="text-sm text-gray-500 mt-1">
          Transfer <span className="font-semibold text-gray-700">{AMOUNT}</span> to the account below to activate your membership.
        </p>
      </div>

      {/* Bank details */}
      <div className="bg-green-50 rounded-2xl p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Amount</span>
          <span className="text-2xl font-bold text-green-600">{AMOUNT}</span>
        </div>

        <div className="h-px bg-green-100" />

        <div>
          <p className="text-xs text-gray-400">{BANK_NAME}</p>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">{ACCOUNT_NAME}</p>
        </div>

        {/* Account number */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-gray-500 font-medium">Account Number</p>
          <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
            <span className="font-mono font-bold tracking-widest text-gray-900">{ACCOUNT_NUMBER}</span>
            <button onClick={copyAccount} className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
              {copiedAccount ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
            </button>
          </div>
        </div>

        {/* Transaction ID */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-gray-500 font-medium">Your Transaction Reference</p>
          <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
            <span className="font-mono font-bold text-gray-900 text-sm">{tx}</span>
            <button onClick={copyTx} className="flex items-center gap-1.5 text-xs text-green-600 font-medium ml-3 shrink-0">
              {copiedTx ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
            </button>
          </div>
        </div>
      </div>

      {/* Instruction */}
      <div className="flex gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
        <span className="text-amber-500 text-base shrink-0 mt-0.5">⚠️</span>
        <p className="text-xs text-amber-700 leading-relaxed">
          When making the transfer, paste your <strong>Transaction Reference</strong> in
          the <strong>narration / description</strong> field of your bank app. This is
          how we identify and verify your payment.
        </p>
      </div>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 h-11 rounded-xl"
      >
        {loading && <Loader2 className="animate-spin mr-2" size={16} />}
        I've Made the Transfer
      </Button>
    </div>
  );
}