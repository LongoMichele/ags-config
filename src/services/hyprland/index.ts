import Hyprland from "gi://AstalHyprland";

export type WorkspaceStatus = "active" | "";

export const maxWorkspaces = 5;

export const hyprland = Hyprland.get_default();

export const getWorkspaceStatus: (
  workspace?: Hyprland.Workspace,
) => WorkspaceStatus = (workspace) => {
  if (hyprland.get_focused_workspace().name === workspace?.name) {
    return "active";
  }

  return "";
};
