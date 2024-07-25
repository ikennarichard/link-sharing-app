'use client'

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="text-[1rem] leading-6 px-[1.69rem] py-[0.68rem] text-white bg-han-purple text-center rounded-lg font-semibold hover:bg-hover-purple hover:shadow-light transition-all duration-200 ease-in-out border-none"
    >
      {pending ? 'Loading' : label}
    </button>
  );
}
