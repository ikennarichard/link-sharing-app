import { ReactNode } from "react";

type InputProperties = {
  name: string;
  type: string;
  label: string;
  icon: ReactNode;
  placeholder: string;
};

export default function Input({
  name,
  type,
  label,
  icon,
  placeholder,
}: InputProperties) {
  return (
    <p>
      <label htmlFor={name} className="text-[0.75rem] leading-[1.125rem] text-dark-grey">{label}</label>
      <p className="flex gap-3 items-center py-3 px-4 rounded-lg border-[1px] border-light-silver">
        {icon}
        <input
          className="text-[1rem] text-dark-grey leading-[1.5rem]"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      </p>
    </p>
  );
}
