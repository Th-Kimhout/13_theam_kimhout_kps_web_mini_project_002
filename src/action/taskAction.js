"use server";

import {
  createTaskFromWorkspaceIdService,
  deleteTaskByIdFromWorkspaceIdService,
  getAllTasksFromWorkspaceIdService,
  updateTaskStatusByIdFromWorkspaceIdService,
} from "@/service/task.service";
import { revalidateTag } from "next/cache";

export const getAllTaskbyWorkspaceIdAction = async (workspaceId) => {
  const taskList = await getAllTasksFromWorkspaceIdService(workspaceId);

  return taskList;
};
export const createTaskAction = async (taskData, workspaceId) => {
  const taskList = await createTaskFromWorkspaceIdService(
    taskData,
    workspaceId
  );
  revalidateTag("getAllTasks");
  return taskList;
};

export const updateTaskStatusAction = async (
  taskId,
  workspaceId,
  taskStatus
) => {
  const res = await updateTaskStatusByIdFromWorkspaceIdService(
    taskId,
    workspaceId,
    taskStatus
  );

  revalidateTag("getAllTasks");
  const { payload } = res;
  return payload;
};

export const deleteTaskByIdAction = async (taskId, workspaceId) => {
  const res = await deleteTaskByIdFromWorkspaceIdService(taskId, workspaceId);
  console.log("deete pat", res);
  revalidateTag("getAllTasks");

  return res;
};
