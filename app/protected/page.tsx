import Link from "next/link";
import ProfileCard from "./_component/profile-card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/login");
  }

  // let metadata = user.user_metadata;
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <header className="h-[22rem] rounded-b-[2rem] bg-han-purple pl-6 pr-6 py-6">
        <div className="px-4 flex justify-between bg-white rounded-xl py-[10px]">
          <Link
            href="#"
            className="font-semibold py-[11px] px-[27px] text-han-purple text-center border-[1px] rounded-lg border-han-purple"
          >
            Back to editor
          </Link>
          <Link
            href="#"
            className="py-[11px] px-[27px] text-center border-[1px] rounded-lg bg-han-purple text-white font-semibold border-han-purple"
          >
            Share Link
          </Link>
        </div>
      </header>
      <ProfileCard />
    </main>
  );
}
