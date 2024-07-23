import Input from "../components/input";
import LogoText from "../components/logo-text";
import SubmitButton from "../components/submit-button";
import Envelope from "../ui/icons/envelope";
import Lock from "../ui/icons/lock-key";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-[3.19rem] overflow-hidden">
      <LogoText />
      <form
        action=""
        className="flex flex-col gap-10 max-w-[29.1rem] rounded-lg bg-white p-10"
      >
        <div>
          <h2 className="text-dark-grey text-[2rem] font-bold leading-[3rem]">
            Login
          </h2>
          <p className="text-nickel text-[1rem] leading-6">
            Add your details below to get back into the app
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Input
            type="email"
            label="Email address"
            placeholder="e.g. alex@email.com"
            icon={<Envelope />}
            name="user_password"
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            icon={<Lock />}
            name="user_mail"
          />
          <SubmitButton label="Login" />
          <p className="text-nickel text-[1rem] text-center leading-[1.5rem]">
            Don’t have an account?{" "}
            <span className="text-han-purple text-[1rem]">Create account</span>
          </p>
        </div>
      </form>
    </main>
  );
}
