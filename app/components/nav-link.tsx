import Link from "next/link";
import { ReactNode } from "react";
// import { useRouter } from "next/router";

type NavLinkProperties = {
  icon: ReactNode;
  label: string;
  link: string;
}

export default function NavLink({ icon, label, link }: NavLinkProperties) {
  // const router = useRouter();
  // const links = router.query.profile === 'true';

  // const toggleLinks = () => {
  //   const isLinks = links === 'links' ? 'profile' : 'links'
  // }

  return (
    <Link
      href={link}
      className="group rounded-lg flex items-center py-[11px] px-[27px] gap-2 font-semibold  text-[1rem] leading-6 hover:bg-light-grey hover:text-han-purple text-nickel group transition-colors duration-200 ease-in-out"
    >
      {icon} {label}
    </Link>
  );
}
