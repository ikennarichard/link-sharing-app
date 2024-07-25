type ProfileDetailProperties = {
  labelText: string;
  label: string;
  place: string;
  type?: string;
};
export default function ProfileDetail({
  labelText,
  label,
  place,
  type = 'text',
}: ProfileDetailProperties) {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor={label} className="w-[40%] text-nickel text-[1rem] leading-6">{labelText}</label>
      <input
        type={type}
        className="py-3 px-4 gap-3 rounded-lg w-full text-dark-grey"
        placeholder={`e.g.${place}`}
        required
      />
    </div>
  );
}
