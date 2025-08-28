'use server';

import { deleteLoginSession } from "@/lib/login/manege-login";
import { asyncDelay } from "@/utils/async-delay";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await asyncDelay(2000); //Esse delay será mantido
  await deleteLoginSession();
  redirect('/');
}
