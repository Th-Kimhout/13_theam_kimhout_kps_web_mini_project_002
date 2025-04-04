"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ListPlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { DatePickerWithPresets } from "./datetimePicker";
import { createTaskAction, updateTaskByIdAction } from "@/action/taskAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/lib/zon/taskSchema";
import SelectTagComponent from "./selectTag";
import toast from "react-hot-toast";

const TaskFormComponent = ({ action, workspaceId, taskId }) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = async (data) => {
    const taskData = {
      ...data,
      endDate: new Date(data.endDate).toISOString(),
    };
    action === "UPDATE"
      ? toast.promise(updateTaskByIdAction(taskId, workspaceId, taskData), {
          success: "Your task has been updated successfully!",
          loading: "Updating your task....",
          error: "Unable to update your task!",
        })
      : toast.promise(createTaskAction(taskData, workspaceId), {
          success: "Your task has been created successfully!",
          loading: "Creating your task....",
          error: "Unable to create your task!",
        });
    reset();
    //toast
  };

  return (
    <form className="space-y-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
      {/* task's title */}
      <div>
        <Label
          htmlFor="taskTitle"
          className="text-light-steel-blue flex gap-2 py-2 items-center mb-2 text-base"
        >
          <ListPlus size={20} /> Task's title
        </Label>

        <Input
          type="text"
          placeholder="Enter your task's title"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("taskTitle")}
        />
      </div>
      <span className="text-red-500 text-sm mt-2">
        {errors?.taskTitle?.message}
      </span>
      {/* task's title */}
      <div>
        <Label
          htmlFor="taskDetails"
          className="text-light-steel-blue flex gap-2 py-2 items-center mb-2 text-base"
        >
          <ListPlus size={20} /> Task's Detail
        </Label>

        <Input
          type="text"
          placeholder="Enter your task's details"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("taskDetails")}
        />
      </div>
      <span className="text-red-500 text-sm mt-2">
        {errors?.taskDetails?.message}
      </span>
      {/* handle Clean task tag */}
      {/* task's tag */}
      <div>
        <Controller
          name="tag"
          control={control}
          render={({ field }) => (
            <SelectTagComponent onSelect={field.onChange} />
          )}
        />
      </div>
      <span className="text-red-500 text-sm mt-2">{errors?.tag?.message}</span>
      {/* task's date */}
      <div>
        <Label
          htmlFor="endDate"
          className="text-light-steel-blue flex gap-2 py-2 items-center mb-2 text-base"
        >
          <ListPlus size={20} /> Task's end date
        </Label>
        {/* handle date */}
        <Controller
          name="endDate"
          control={control}
          render={({ field }) => (
            <DatePickerWithPresets
              selected={field.value}
              onSelect={field.onChange}
            />
          )}
        />
      </div>
      <span className="text-red-500 text-sm mt-2">
        {errors?.endDate?.message}
      </span>
      <Button
        type="submit"
        className={`text-base cursor-pointer text-white py-2.5 rounded-lg w-full   ${
          action === "UPDATE"
            ? "hover:bg-persian-green bg-transparent text-persian-green  border-1 border-persian-green"
            : "hover:bg-royal-blue bg-transparent text-royal-blue  border-1 border-royal-blue"
        }`}
      >
        {action === "UPDATE" ? "Update" : "Create"}
      </Button>
    </form>
  );
};

export default TaskFormComponent;
