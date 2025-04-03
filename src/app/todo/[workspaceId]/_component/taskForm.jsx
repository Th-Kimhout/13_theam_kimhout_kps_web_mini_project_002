"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ListPlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { DatePickerWithPresets } from "./datetimePicker";
import { createTaskAction } from "@/action/taskAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/lib/zon/taskSchema";
import SelectTagComponent from "./selectTag";

const TaskFormComponent = ({ action, workspaceId }) => {
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
    const res = await createTaskAction(taskData, workspaceId);
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
      {/* task's title */}
      <div>
        <Label
          htmlFor="endDate"
          className="text-light-steel-blue flex gap-2 py-2 items-center mb-2 text-base"
        >
          <ListPlus size={20} /> Task's end date
        </Label>

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
        className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold"
      >
        {action === "UPDATE" ? "UPDATE TASK" : "ADD TASK"}
      </Button>
    </form>
  );
};

export default TaskFormComponent;
