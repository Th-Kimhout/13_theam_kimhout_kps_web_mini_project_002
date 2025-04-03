import headerToken from "@/app/api/headerToken";
import { baseUrl } from "./constant";

export const getWorkspaceByIdService = async (id) => {
  const headers = await headerToken();
  try {
    const res = await fetch(`${baseUrl}/workspace/${id}`, {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateWorkspaceByIdService = async (id, workspaceData) => {
  try {
    const headers = await headerToken();
    const res = await fetch(`${baseUrl}/workspace/${id}`, {
      method: "PUT",
      body: JSON.stringify(workspaceData),
      headers: headers,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const createNewWorkspaceService = async (workspace) => {
  const headers = await headerToken();
  try {
    const res = await fetch(`${baseUrl}/workspace`, {
      method: "POST",
      body: JSON.stringify(workspace),
      headers: headers,
      next: { tags: ["newWorkspace"] },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const updateWorkspaceFavoriteByIdService = async (id, favState) => {
  const headers = await headerToken();
  try {
    const res = await fetch(
      `${baseUrl}/workspace/${id}/favorite?favorite=${favState}`,
      {
        method: "PATCH",
        headers: headers,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const getAllWorkspacesService = async () =>
  // pageNo,
  // pageSize,
  // sortByField,
  // sortDirection
  {
    const headers = await headerToken();

    try {
      const res = await fetch(
        `${baseUrl}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
        {
          method: "GET",
          headers: headers,
          next: { tags: ["updateStateWorkspace"] },
        }
      );
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
