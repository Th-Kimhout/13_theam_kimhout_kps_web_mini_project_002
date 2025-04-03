import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ellipsis, Grid2x2Plus } from "lucide-react";
import WorkspaceFormComponent from "./workspaceForm";

const PopupFormComponent = ({ workspaceId, action }) => {
  return (
    <Dialog>
      <DialogTrigger className="hover:bg-gray-500/30 p-2 rounded-sm">
        {action === "UPDATE" ? (
          <Ellipsis className={"size-5"} />
        ) : (
          <Grid2x2Plus className={"size-6"} />
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={"text-center"}>
            {action === "UPDATE" ? "Update Workspace" : "Add Workspace"}
          </DialogTitle>
          <WorkspaceFormComponent workspaceId={workspaceId} action={action} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PopupFormComponent;
