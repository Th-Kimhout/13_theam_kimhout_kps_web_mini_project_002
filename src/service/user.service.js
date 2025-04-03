import headerToken from "@/app/api/headerToken";
import { baseUrl } from "./constant";

export const getAllUserInfoService = async () => {
  const headers = await headerToken();
  try {
    const res = await fetch(`${baseUrl}/user`, {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();

    return data;
  } catch (e) {
    console.log("Error: ", e);
  }
};
