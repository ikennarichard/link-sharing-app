'use client'

import Link from "next/link";
import Input from "../components/input";
import LogoText from "../components/logo-text";
import SubmitButton from "../components/submit-button";
import Envelope from "../ui/icons/envelope";
import Lock from "../ui/icons/lock-key";
import { useForm } from "react-hook-form";

interface UserDetails {
  mail: string;
  password: string;
}

export default function LoginPage() {
 
    const {
      register,
      formState: { errors },
    } = useForm<UserDetails>({
      mode: "all",
    });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-[3.19rem] overflow-hidden py-2">
      <LogoText />
      <form
        action=""
        className="flex flex-col gap-10 w-[29.8rem] rounded-lg bg-white p-10"
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
        <Input icon={<Envelope />} label="Email address" labelFor="mail">
              <input
                {...register("mail", {
                  required: "Can't be empty",
                })}
                className={`text-[1rem] text-dark-grey leading-[1.5rem] bg-transparent w-full py-3 px-4 rounded-lg border-[1px] border-light-silver focus:border-han-purple outline-none focus:shadow-light pl-10 ${errors?.mail && 'border-coral-red shadow-none'}`}
                type="email"
                id="mail"
                placeholder="e.g. alex@email.com"
              />
              <p className="text-red-500 h-1 w-fit text-sm absolute right-3 top-4">
                {errors?.mail && errors.mail.message}
              </p>
            </Input>
            <Input
              label="Create password"
              labelFor="password"
              icon={<Lock />}
            >
              <input
                {...register("password", {
                  required: "Can't be empty",
                  minLength: {value: 8, message: 'Please check again'}
                })}
                className={`text-[1rem] text-dark-grey leading-[1.5rem] bg-transparent w-full py-3 px-4 rounded-lg border-[1px] border-light-silver outline-none focus:border-han-purple focus:shadow-light pl-10 ${errors?.password && 'border-coral-red shadow-none'}`}
                type='password'
                id='password'
                placeholder="At least 8 characters"
              />
              <p className="text-red-500 h-1 w-fit text-sm absolute right-3 top-4">
                {errors?.password && errors.password.message}
              </p>
              </Input>
          <SubmitButton label="Login" />
          <p className="text-nickel text-[1rem] text-center leading-[1.5rem]">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-han-purple text-[1rem]">
              Create account
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
