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

// client.use(middleCheck);

export { client };
