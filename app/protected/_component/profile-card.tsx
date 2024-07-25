import SocialSkeleton from "@/app/components/mobile-illustration/social-skeleton";
import Image from "next/image";

export default function ProfileCard() {
  const user = false;
  return (
    <div className="w-fit h-fit mx-auto flex flex-col gap-[20px] py-[48px] px-[56px] z-10 absolute left-0 right-0 bottom-10 rounded-lg items-center justify-center bg-white">
      <div className="w-24 h-24 rounded-full bg-light-silver border-[1px] border-han-purple">
        {user && (
          <Image
            src=""
            alt="headshot of user"
            fetchPriority="high"
            objectFit="cover"
            objectPosition="center"
          ></Image>
        )}
      </div>
        <div className="w-[160px] h-[16px] rounded-[104px] bg-light-silver"></div>
        <div className="w-[72px] h-[8px] rounded-[104px] bg-light-silver"></div>
      <>
        <SocialSkeleton />
        <SocialSkeleton />
        <SocialSkeleton />
      </>
    </div>
  );
}
