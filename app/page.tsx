import { createClient } from "@/utils/supabase/server";
import CustomizeLinks from "./components/customize-links/customize-links";
import Header from "./components/header";
import MobileIllustration from "./components/mobile-illustration/mobile-illustration";
import Profile from "./components/profile-details/profile";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/login");
  }

  let metadata = user.user_metadata;
  
  return (
    <main className="flex flex-col min-h-screen px-6 py-6">
      <Header />
      <section className="grid grid-cols-2 gap-2">
        <MobileIllustration />
        {user ? <CustomizeLinks /> : <Profile />}
      </section>
    </main>
  );
}
