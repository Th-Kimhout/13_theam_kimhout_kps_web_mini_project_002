import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Circle, Ellipsis, Grid2x2Plus } from "lucide-react";
import PopupFormComponent from "./popupForm";
import Link from "next/link";
import { DropdownMenuComponent } from "../[workspaceId]/_component/dropdownMenus";

export const Workspace = ({ workspace }) => {
  return (
    <>
      <SidebarGroup
        className={
          "flex-row justify-between items-center !text-description pr-3.5"
        }
      >
        <SidebarGroupLabel className={"font-bold text-2xl !text-description"}>
          Workspace
        </SidebarGroupLabel>
        <PopupFormComponent />
      </SidebarGroup>

      <SidebarGroup>
        <SidebarMenu>
          {workspace?.map((data) => (
            <SidebarMenuItem
              key={data.workspaceId}
              className={
                "flex justify-between items-center py-1 hover:bg-zinc-200 rounded-md px-2"
              }
            >
              <div className="flex gap-4 items-center justify-center">
                <Circle stroke={data.color} fill={data.color} size={12} />
                {/* <SidebarMenuButton className={"flex justify-between"}> */}
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
