'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod";

const UserSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirm_password: z.string(),
});

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("mail") as string,
    password: formData.get("password") as string,
    confirm_password: formData.get("confirm_password") as string,
  };

  try {
    UserSchema.parse(data);
    if (data.confirm_password === data.password) {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      
    if (error) {
      redirect('/error')
    }
    }

  } catch (e) {
    console.error(e)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}