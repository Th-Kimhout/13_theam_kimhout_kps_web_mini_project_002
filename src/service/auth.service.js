import { baseUrl } from "./constant";

export const registerUserService = async (userData) => {
  try {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const loginService = async (loginData) => {
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};
