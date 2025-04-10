import { clsx } from "clsx";
import createClient, { Middleware } from "openapi-fetch";

import type { paths } from "@/types/api";

export function cn(...inputs: any[]) {
  return clsx(inputs);
}

// const middleCheck: Middleware = {
//   async onRequest({ request, options }) {
//     const authHeader = request.headers.get("Authorization");
//     console.log("Authorization Header: ", authHeader);
//     return request;
//   },
// };

const client = createClient<paths>({
  baseUrl: `${process.env.BACKEND}/api`,
});

function calculateTimeLeft(startDate?: string): string {
  if (!startDate) return "ไม่มีกำหนดการ"; // No upcoming live

  const now = new Date();
  const start = new Date(startDate);
  const diffMs = Math.abs(start.getTime() - now.getTime());

  const minutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} วัน`;
  if (hours > 0) return `${hours} ชั่วโมง`;
  return `${minutes} นาที`;
}

function formatThaiDate(isoString: string): string {
  const date = new Date(isoString);

  const day = date.getUTCDate();
  const monthIndex = date.getUTCMonth(); // 0-based index (Jan = 0)
  const yearBE = date.getUTCFullYear() + 543; // Convert to Buddhist Era
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0"); // Ensure two digits

  // Map month index to Thai month name
  const thaiMonths = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const monthThai = thaiMonths[monthIndex];

  return `${day} ${monthThai} ${yearBE} ${hours}.${minutes} น.`;
}

// client.use(middleCheck);

export { client, formatThaiDate, calculateTimeLeft };
