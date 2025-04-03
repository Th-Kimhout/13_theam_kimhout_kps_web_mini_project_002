import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "../../../components/ui/sidebar";
import { Circle, Star } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import PopupFormComponent from "./popupForm";

export const FavoriteWorkspace = ({ workspace }) => {
  return (
    <>
      <SidebarGroup
        className={"flex-row justify-between items-center !text-description"}
      >
        <SidebarGroupLabel className={"font-bold text-xl !text-description"}>
          Favorite
        </SidebarGroupLabel>

        <Button variant={"ghost"}>
          {" "}
          <Star className={"size-6"} />
        </Button>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarMenu>
          {workspace
            .filter((data) => data.isFavorite)
            ?.map((data) => (
              <SidebarMenuItem
                key={data.workspaceId}
                className={
                  "flex justify-between items-center py-1 hover:bg-zinc-200 rounded-md px-2"
                }
              >
                <div className="flex gap-4 items-center justify-center">
                  <Circle stroke={data.color} fill={data.color} size={12} />
                  <Link href={`/todo/${data.workspaceId}?q=workspace`}>
                    <span>{data.workspaceName}</span>
                  </Link>
                </div>
                <PopupFormComponent
                  workspaceId={data.workspaceId}
                  action={"UPDATE"}
                />
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
};
