// app/join/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Copy, Upload, X, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3;

interface FormData {
  name: string;
  email: string;
  password: string;
}

// ── Step indicator ─────────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: Step }) {
  const steps = [
    { n: 1, label: "Create Account" },
    { n: 2, label: "Pay Registration" },
    { n: 3, label: "Pending Verification" },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
              current > s.n
                ? "bg-green-500 text-white"
                : current === s.n
                ? "bg-green-500 text-white ring-4 ring-green-100"
                : "bg-gray-100 text-gray-400"
            )}>
              {current > s.n ? <Check size={14} /> : s.n}
            </div>
            <span className={cn(
              "text-[11px] font-medium whitespace-nowrap",
              current >= s.n ? "text-green-600" : "text-gray-400"
            )}>
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={cn(
              "w-16 h-[2px] mx-1 mb-5 transition-all duration-500",
              current > s.n + 0 ? "bg-green-400" : "bg-gray-200"
            )} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Step 1: Sign Up Form ───────────────────────────────────────────────────────
function SignUpStep({ onNext }: { onNext: (data: FormData) => void }) {
  const [form, setForm] = useState<FormData>({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid email";
    if (form.password.length < 8) e.password = "Password must be at least 8 characters";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    // TODO: hit your backend to create user + generate transaction ID
    await new Promise(r => setTimeout(r, 1200)); // simulate API
    setLoading(false);
    onNext(form);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h1>
        <p className="text-sm text-gray-500">Join ASVA — fill in your details to get started.</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
          <Input
            id="name"
            placeholder="Mojoyinoluwa Sholotan"
            value={form.name}
            onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(ev => ({ ...ev, name: "" })); }}
            className={cn("h-11 rounded-xl border-gray-200 focus-visible:ring-green-400", errors.name && "border-red-400")}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@university.edu"
            value={form.email}
            onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(ev => ({ ...ev, email: "" })); }}
            className={cn("h-11 rounded-xl border-gray-200 focus-visible:ring-green-400", errors.email && "border-red-400")}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            value={form.password}
            onChange={e => { setForm(f => ({ ...f, password: e.target.value })); setErrors(ev => ({ ...ev, password: "" })); }}
            className={cn("h-11 rounded-xl border-gray-200 focus-visible:ring-green-400", errors.password && "border-red-400")}
          />
          {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="h-11 w-full rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm mt-1"
      >
        {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
        {loading ? "Creating account..." : "Continue to Payment"}
      </Button>

      <p className="text-center text-xs text-gray-500">
        Already a member?{" "}
        <Link href="/login" className="text-green-600 font-medium hover:underline">Sign in</Link>
      </p>
    </div>
  );
}

// ── Step 2: Payment ────────────────────────────────────────────────────────────
function PaymentStep({ form, onNext }: { form: FormData; onNext: () => void }) {
  // These would come from your backend in reality
  const ACCOUNT_NUMBER = "0123456789";
  const ACCOUNT_NAME = "ASVA Student Association";
  const BANK_NAME = "First Bank";
  const TRANSACTION_ID = "ASVA-TXN-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  const AMOUNT = "₦5,000";

  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedTxn, setCopiedTxn] = useState(false);
  const [receipt, setReceipt] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const copy = (text: string, which: "account" | "txn") => {
    navigator.clipboard.writeText(text);
    if (which === "account") { setCopiedAccount(true); setTimeout(() => setCopiedAccount(false), 2000); }
    else { setCopiedTxn(true); setTimeout(() => setCopiedTxn(false), 2000); }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: POST receipt + transaction ID to backend
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Complete your payment</h1>
        <p className="text-sm text-gray-500">
          Transfer <span className="font-semibold text-gray-800">₦5,000</span> to the account below to activate your ASVA membership.
        </p>
      </div>

      {/* Payment details card */}
      <div className="bg-green-50 rounded-2xl p-5 flex flex-col gap-4 border border-green-100">

        {/* Amount */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Registration Fee</span>
          <span className="text-2xl font-bold text-green-600">{AMOUNT}</span>
        </div>

        <div className="h-px bg-green-100" />

        {/* Bank info */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400 font-medium">{BANK_NAME}</span>
          <span className="text-sm font-semibold text-gray-700">{ACCOUNT_NAME}</span>
        </div>

        {/* Account number */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-gray-500 font-medium">Account Number</span>
          <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-green-100">
            <span className="font-mono font-bold text-gray-900 tracking-widest text-sm">{ACCOUNT_NUMBER}</span>
            <button
              onClick={() => copy(ACCOUNT_NUMBER, "account")}
              className="flex items-center gap-1.5 text-xs text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              {copiedAccount ? <Check size={13} /> : <Copy size={13} />}
              {copiedAccount ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Transaction ID */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-gray-500 font-medium">Transaction ID <span className="text-gray-400 font-normal">(paste in transfer narration)</span></span>
          <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-green-100">
            <span className="font-mono font-bold text-gray-900 text-sm">{TRANSACTION_ID}</span>
            <button
              onClick={() => copy(TRANSACTION_ID, "txn")}
              className="flex items-center gap-1.5 text-xs text-green-600 font-medium hover:text-green-700 transition-colors ml-3 shrink-0"
            >
              {copiedTxn ? <Check size={13} /> : <Copy size={13} />}
              {copiedTxn ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      {/* Instruction callout */}
      <div className="flex gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
        <span className="text-amber-500 text-lg leading-none mt-0.5">⚠️</span>
        <p className="text-xs text-amber-700 leading-relaxed">
          You <strong>must</strong> paste the Transaction ID in the narration/description field of your bank transfer. This is how we identify your payment.
        </p>
      </div>

      {/* Receipt upload */}
      <div className="flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">Upload Payment Receipt <span className="text-gray-400 font-normal">(optional but recommended)</span></Label>

        {receipt ? (
          <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
                <Check size={13} className="text-green-600" />
              </div>
              <span className="text-sm text-gray-700 font-medium truncate max-w-[200px]">{receipt.name}</span>
            </div>
            <button onClick={() => setReceipt(null)} className="text-gray-400 hover:text-red-400 transition-colors">
              <X size={15} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl py-6 cursor-pointer hover:border-green-300 hover:bg-green-50 transition-all">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Upload size={15} className="text-gray-400" />
            </div>
            <span className="text-xs text-gray-500">Click to upload receipt <span className="text-gray-400">(PNG, JPG, PDF)</span></span>
            <input
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={e => e.target.files?.[0] && setReceipt(e.target.files[0])}
            />
          </label>
        )}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="h-11 w-full rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm"
      >
        {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
        {loading ? "Submitting..." : "I've Made the Transfer"}
      </Button>
    </div>
  );
}

// ── Step 3: Pending Verification ───────────────────────────────────────────────
function PendingStep({ form }: { form: FormData }) {
  return (
    <div className="flex flex-col items-center text-center gap-5 py-4">
      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
        <CheckCircle2 size={40} className="text-green-500" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">You're almost in!</h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
          Hey <span className="font-semibold text-gray-700">{form.name.split(" ")[0]}</span>, we've received your registration.
          Our team is verifying your payment — this usually takes <span className="font-medium text-gray-700">a few hours</span>.
        </p>
      </div>

      {/* Status pill */}
      <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-5 py-2.5">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Payment under review</span>
      </div>

      {/* What happens next */}
      <div className="w-full bg-gray-50 rounded-2xl p-5 text-left flex flex-col gap-4 mt-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">What happens next</p>
        {[
          { icon: "🔍", title: "Payment verified", desc: "Admin confirms your transfer matches the transaction ID." },
          { icon: "✉️", title: "Email confirmation", desc: `A confirmation is sent to ${form.email}.` },
          { icon: "🎉", title: "Access granted", desc: "Your ASVA dashboard becomes available immediately after approval." },
        ].map(item => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="text-base mt-0.5">{item.icon}</span>
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400">
        Questions? Reach us at{" "}
        <a href="mailto:support@asva.edu" className="text-green-600 hover:underline font-medium">support@asva.edu</a>
      </p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function JoinPage() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", password: "" });

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar — same as landing page */}
      <nav className="flex items-center justify-between px-8 h-16 border-b border-gray-100 sticky top-0 bg-white z-50">
        <Link href="/" className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
          S
        </Link>
        <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft size={14} />
          Back to home
        </Link>
      </nav>

      {/* Page body */}
      <div className="flex min-h-[calc(100vh-64px)]">

        {/* LEFT — decorative green panel (same aesthetic as hero) */}
        <div className="hidden lg:flex flex-col justify-between w-[42%] bg-gray-900 p-12 relative overflow-hidden">
          {/* Subtle green glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-green-500/8 blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs text-green-400 font-medium">Membership Registration</span>
            </div>
            <h2 className="text-3xl font-bold text-white leading-snug mb-4">
              Building Leaders.<br />
              Driving Impact.
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Join a community of driven students advancing academic excellence and meaningful campus engagement.
            </p>
          </div>

          {/* Testimonial / stat cards */}
          <div className="relative z-10 flex flex-col gap-3">
            {[
              { stat: "500+", label: "Active Members" },
              { stat: "₦0", label: "Hidden Fees — just ₦5,000 once" },
              { stat: "24h", label: "Average verification time" },
            ].map(item => (
              <div key={item.stat} className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl px-5 py-4">
                <span className="text-xl font-bold text-green-400">{item.stat}</span>
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form panel */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <StepIndicator current={step} />

            {step === 1 && (
              <SignUpStep onNext={(data) => { setFormData(data); setStep(2); }} />
            )}
            {step === 2 && (
              <PaymentStep form={formData} onNext={() => setStep(3)} />
            )}
            {step === 3 && (
              <PendingStep form={formData} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}