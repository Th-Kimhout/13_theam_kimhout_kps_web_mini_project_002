import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ellipsis, Grid2x2Plus } from "lucide-react";
import WorkspaceFormComponent from "./workspaceForm";

const PopupFormComponent = ({ workspaceId, workspaceName, action }) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer p-1.5 rounded-sm">
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
          <WorkspaceFormComponent
            workspaceId={workspaceId}
            workspaceName={workspaceName}
            action={action}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PopupFormComponent;
