import { CheckCircle2 } from "lucide-react";
import { FormData } from "./types";

export default function PendingStep({ form }: { form: FormData }) {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <CheckCircle2 className="text-green-500" size={50} />

      <h1 className="text-2xl font-bold">You're almost in!</h1>

      <p className="text-sm text-gray-500">
        Hi {form.name.split(" ")[0]}, your registration is under review.
      </p>

      <span className="text-xs bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
        Pending verification
      </span>
    </div>
  );
}