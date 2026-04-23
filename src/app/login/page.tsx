"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowLeft } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
  setError("");

  if (!form.identifier.trim() || !form.password.trim()) {
    setError("Please fill in all fields");
    return;
  }

  setLoading(true);
  try {
    const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.identifier,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.detail ?? "Invalid credentials");
      return;
    }

    // Store tokens
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);

    router.push("/dashboard");
  } catch {
    setError("Network error — is the server running?");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="w-full max-w-md">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 relative mb-3">
            <Image
              src="/asva logo.png"
              alt="ASVA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-white text-xl font-bold">ASVA Portal</h1>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-xl">

          <div className="flex flex-col gap-4">

            {/* Email / Username */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-gray-300 text-sm">
                Email or Username
              </Label>
              <Input
                value={form.identifier}
                onChange={(e) =>
                  setForm({ ...form, identifier: e.target.value })
                }
                placeholder="Enter email or username"
                className="h-11 rounded-xl bg-black border-white/10 text-white focus:border-green-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-gray-300 text-sm">Password</Label>
              <Input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="Enter password"
                className="h-11 rounded-xl bg-black border-white/10 text-white focus:border-green-500"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-xs text-red-400">{error}</p>
            )}

            {/* Button */}
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="h-11 bg-green-500 hover:bg-green-600 text-white rounded-xl mt-2"
            >
              {loading && (
                <Loader2 className="animate-spin mr-2" size={16} />
              )}
              Login
            </Button>

            {/* Footer */}
            <p className="text-xs text-gray-500 text-center mt-3">
              Don’t have an account?{" "}
              <a href="/join" className="text-green-400 hover:underline">
                Join ASVA
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}