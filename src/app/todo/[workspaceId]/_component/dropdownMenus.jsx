"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import TaskActionButtonComponent from "./taskActionButton";
import DialogDeleteComponent from "./dialogDelete";


export function DropdownMenuComponent({taskId, workspaceId }) {
  const menuItems = [
    { label: "Update Task", action: "UPDATE" },
    { label: "Delete Task", action: "DELETE" },
  ];

  const [selectedAction, setSelectedAction] = useState(null);

  const handleMenuClick = (item) => {
    setSelectedAction(null);

    setTimeout(() => {
      setSelectedAction(item);
    }, 0);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {menuItems?.map((item, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleMenuClick(item)}
              >
                <span>{item.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Open Dialog or Popover based on action */}
      {selectedAction?.action === "UPDATE" ||
      selectedAction?.action === "ADD" ? (
        <TaskActionButtonComponent
          action={selectedAction.action}
          workspaceId={workspaceId}
        />
      ) : selectedAction?.action === "DELETE" ? (
        <DialogDeleteComponent
          action={selectedAction.action}
          taskId={taskId}
          workspaceId={workspaceId}
        />
      ) : null}
    </>
  );
}
