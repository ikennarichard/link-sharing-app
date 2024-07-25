import Mobile from "./mobile-svg";
import ProfilePicture from "./profile-picture";
import SocialSkeleton from "./social-skeleton";

export default function MobileIllustration() {
  return (
    <div className="flex justify-center items-center relative p-6 rounded-xl bg-white h-full">
      <Mobile />
      <div className="absolute top-[140px] flex flex-col justify-center items-center gap-7 w-[234px]">
        <div className="flex flex-col justify-center items-center gap-4">
          <ProfilePicture />
          <div className="w-[160px] h-[16px] rounded-[104px] bg-light-silver"></div>
          <div className="w-[72px] h-[8px] rounded-[104px] bg-light-silver"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <SocialSkeleton />
          <SocialSkeleton />
          <SocialSkeleton />
          <SocialSkeleton />
          <SocialSkeleton />
        </div>
      </div>
    </div>
  );
}
