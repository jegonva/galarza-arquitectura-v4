"use server";

import { createClient } from "@/utils/supabase/server";

export async function createLead(formData: FormData) {
  const nombre = formData.get("nombre")?.toString() || "Desconocido";
  const telefono = formData.get("telefono")?.toString() || "";
  
  if (!telefono || telefono.length < 5) {
    return { error: "Número de teléfono inválido" };
  }

  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          nombre,
          telefono,
          estado: "nuevo",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error.message);
      return { error: "Error al conectar con la base de datos." };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Server Action Error:", err.message);
    return { error: "Error interno procesando la solicitud." };
  }
}
