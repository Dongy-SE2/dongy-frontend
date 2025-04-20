import axios from "axios";

const baseUrl = `${process.env.BACKEND}/api`;

async function api(
  endPoint: string,
  detail: string,
  token: string,
  additional?: any,
) {
  console.log({
    data: {
      detail,
      ...additional,
    },
  });
  return await axios.post(
    `${baseUrl}${endPoint}`,
    {
      data: {
        detail,
        ...additional,
      },
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
}

export async function generalReport(detail: string, token: string) {
  const result = await api("/general-reports", detail, token);
  console.log(result.data);
}

export async function userReport(
  detail: string,
  userId: string,
  token: string,
) {
  const result = await api("/general-reports", detail, token, {
    reportee_did: userId,
  });
  console.log(result.data);
}
export async function orderReport(
  detail: string,
  orderId: string,
  token: string,
) {
  const result = await api("/order-reports", detail, token, {
    order_did: orderId,
  });
  console.log(result.data);
}
