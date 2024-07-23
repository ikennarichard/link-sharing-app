export default function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="text-[1rem] leading-6 px-[1.69rem] py-[0.68rem] text-white bg-han-purple text-center rounded-lg font-semibold"
    >
      {label}
    </button>
  );
}
