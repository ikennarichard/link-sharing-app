import Image from "next/image";

export default function ProfilePicture() {
  const user = false;
  return (
    <div className="w-24 h-24 rounded-full bg-light-silver">
      {
        user &&
        <Image
          src=""
          alt="headshot of user"
          fetchPriority="high"
          objectFit="cover"
          objectPosition="center"
        >
        </Image>
      }
    </div>
  );
}
