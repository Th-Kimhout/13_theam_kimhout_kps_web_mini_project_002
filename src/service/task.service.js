import headerToken from "@/app/api/headerToken";
import { baseUrl } from "./constant";

export const getTaskByIdFromWorkspaceIdService = async (
  taskId,
  workspaceId
) => {
  try {
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskByIdFromWorkspaceIdService = async (
  taskId,
  workspaceId,
  taskInfo
) => {
  try {
    const headers = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`,
      {
        method: "PUT",
        body: JSON.stringify(taskInfo),
        headers: headers,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteTaskByIdFromWorkspaceIdService = async (
  taskId,
  workspaceId
) => {
  try {
    const headers = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`,
      {
        method: "DELETE",
        headers: headers,
      }
    );
    const data = await res.json();
    console.log("in fetvh", data);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createTaskFromWorkspaceIdService = async (
  taskInfo,
  workspaceId
) => {
  try {
    const headers = await headerToken();
    const res = await fetch(`${baseUrl}/task/workspace/${workspaceId}`, {
      method: "POST",
      body: JSON.stringify(taskInfo),
      headers: headers,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskStatusByIdFromWorkspaceIdService = async (
  taskId,
  workspaceId,
  taskStatus
) => {
  try {
    const headers = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}/status?status=${taskStatus}`,
      {
        method: "PATCH",
        headers: headers,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllTasksFromWorkspaceIdService = async (
  // taskId,
  workspaceId
  // pageNo,
  // pageSize,
  // sortByField,
  // sortDirection
) => {
  try {
    const headers = await headerToken();
    const res = await fetch(
      `${baseUrl}/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        method: "GET",
        headers: headers,
        next: { tags: ["getAllTasks"] },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
