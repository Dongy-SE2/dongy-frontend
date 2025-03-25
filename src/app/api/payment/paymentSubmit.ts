"use server";

import axios from "axios";

const paymentSubmit = async (
  omise:any,
  token: string
) => {
  // console.log(omise)
  // const {response, data} = await client.POST("/payments", {body: {
  //   data: omise
  // },
  //   headers: {
  //     "Authorization": `Bearer ${token}`
  // }})

  try {
    const profile = await axios.get(`${process.env.BACKEND}/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    omise.mobile_number = profile.data.phone
    omise.phone_number = profile.data.phone
    omise.email = profile.data.email
    omise.source = omise.id
    console.log({data: omise})
    const res = await axios.post(`${process.env.BACKEND}/api/payments`,
      {
        data: omise
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    )
    return 200;
  }catch(e) {
    console.error(e as any)
    return 400;
  }


};

export default paymentSubmit;
