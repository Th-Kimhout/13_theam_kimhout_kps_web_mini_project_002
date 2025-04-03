"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Grid2x2Plus } from "lucide-react";
import TaskFormComponent from "./taskForm";
import { useState, useEffect } from "react";

const TaskActionButtonComponent = ({ action, workspaceId }) => {
  const [isOpen, setIsOpen] = useState(!!action);

  // Sync isOpen with action changes
  useEffect(() => {
    setIsOpen(!!action);
  }, [action]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {action === "UPDATE" ? null : (
        <DialogTrigger asChild>
          <button>
            <Grid2x2Plus className="size-6" />
          </button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {action === "UPDATE" ? "Update Task" : "Add Task"}
          </DialogTitle>
          <TaskFormComponent action={action} workspaceId={workspaceId} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TaskActionButtonComponent;
