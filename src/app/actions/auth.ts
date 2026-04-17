"use server";

import { cookies } from "next/headers";

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password")?.toString();
  
  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("galarza_admin_auth", password, { 
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    });
    return { success: true };
  }
  
  return { error: "Contraseña incorrecta." };
}
