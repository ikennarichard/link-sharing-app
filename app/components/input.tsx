import { ReactNode } from "react";

type InputProperties = {
  label: string;
  labelFor: string;
  icon: ReactNode;
  children: ReactNode
};

export default function Input({
  label,
  labelFor,
  icon,
  children
}: InputProperties) {
  return (
    <div>
      <label
        htmlFor={labelFor}
        className="text-[0.75rem] leading-[1.125rem] text-dark-grey"
      >
        {label}
      </label>
      <div className="flex gap-3 items-center relative">
        <span className="absolute left-4">{icon}</span>
        {children}
      </div>
    </div>
  );
}
