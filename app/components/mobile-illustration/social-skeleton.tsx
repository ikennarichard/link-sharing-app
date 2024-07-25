import Link from "next/link";

type SocialSkeletonProperties = {
  link?: string;
  label?: string;
  color?: string;
  icon?: string;
};

export default function SocialSkeleton({
  link,
  color,
  icon,
  label
}: SocialSkeletonProperties) {
  return (
    <button
      className={`${
        color ? color : "bg-light-silver"
      } rounded-lg w-[13rem] h-[2.525rem] p-4`}
    >
      <div>
        <div>
          {icon}
          <p>{label}</p>
        </div>
      </div>
    </button>
  );
}
