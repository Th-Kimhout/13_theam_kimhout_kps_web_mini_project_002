"use client";
import {
  createWorkspaceAction,
  updateWorkspaceNameByIdAction,
} from "@/action/workspaceAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ListPlus } from "lucide-react";
import { useForm } from "react-hook-form";

const WorkspaceFormComponent = ({ workspaceId, action }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res =
      action === "UPDATE"
        ? await updateWorkspaceNameByIdAction(workspaceId, data)
        : await createWorkspaceAction(data);
  };

  return (
    <form className="space-y-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
      {/* workspace's name */}
      <div>
        <Label
          htmlFor="email"
          className="text-light-steel-blue flex gap-2 py-2 items-center mb-2 text-base"
        >
          <ListPlus size={20} /> Workspace's Name
        </Label>

        <Input
          type="text"
          placeholder="Enter your workspace's name"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("workspaceName")}
        />
      </div>
      <span className="text-red-500 text-sm mt-2">
        {errors?.email?.message}
      </span>
      {/* sign in button */}
      <Button
        type="submit"
        className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold"
      >
        {action === "ADD" ? "ADD WORKSPACE" : "UPDATE WORKSPACE"}
      </Button>
    </form>
  );
};

export default WorkspaceFormComponent;
