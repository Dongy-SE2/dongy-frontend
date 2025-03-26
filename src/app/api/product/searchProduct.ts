"use server";

import { redirect } from "next/navigation";

export async function searchProduct(data: FormData) {
  const search = data.get("search")?.toString();
  const params = new URLSearchParams();
  if (search && search.length > 0) {
    params.append("search", search);
  }
  redirect(
    `/product${search && search.length > 0 ? `?${params.toString()}` : ""}`,
  );
}
