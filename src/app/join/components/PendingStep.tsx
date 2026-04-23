"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormData } from "./types";

export default function PendingStep({ form }: { form: FormData }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center text-center gap-5">
      <CheckCircle2 className="text-green-500" size={50} />

      <h1 className="text-2xl font-bold">You're almost in!</h1>

      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
        Hi {form.username}, your registration is under review. Once our team
        verifies your payment, you can log in and access your dashboard.
      </p>

      <span className="text-xs bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
        Pending verification
      </span>

      <Button
        onClick={() => router.push("/login")}
        className="h-11 w-full bg-green-500 hover:bg-green-600 rounded-xl mt-2"
      >
        Go to Login
      </Button>
    </div>
  );
}