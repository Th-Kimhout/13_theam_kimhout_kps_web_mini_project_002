"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { deleteTaskByIdAction } from "@/action/taskAction";

const DialogDeleteComponent = ({ action, taskId, workspaceId }) => {
  const [isOpen, setIsOpen] = useState(!!action);

  // Sync isOpen with action changes
  useEffect(() => {
    setIsOpen(!!action);
  }, [action]);

  const handleDelete = async () => {
    const res = await deleteTaskByIdAction(taskId.trim(), workspaceId.trim());
    console.log("res", res);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Delete Task</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete this task?
          </DialogDescription>
          <Button
            onClick={handleDelete}
            className={"bg-red-500 hover:bg-red-600 text-white"}
          >
            DELETE
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeleteComponent;
