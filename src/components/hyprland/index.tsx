import { BoxProps, LabelProps } from "astal/gtk3/widget";
import {
  getWorkspaceStatus,
  hyprland,
  maxWorkspaces,
} from "../../services/hyprland";
import type Hyprland from "gi://AstalHyprland";
import { bind } from "astal";
import { Box } from "astal/gtk3/widget";

export const Workspace = ({
  label,
  className,
  workspace,
  ...props
}: LabelProps & { workspace?: Hyprland.Workspace }) => {
  return (
    <label
      label={label}
      className={bind(hyprland, "focusedWorkspace").as(() =>
        `workspace ${getWorkspaceStatus(workspace)} ${className}`.trim(),
      )}
      {...props}
    />
  );
};

export const Workspaces = (props: Omit<BoxProps, "children">) => {
  return (
    <Box
      children={bind(hyprland, "workspaces").as((workspaces) => {
        const sortedWorkspaces = Array.from({ length: maxWorkspaces }, (_, i) =>
          workspaces.find(({ id }) => id === i + 1),
        );
        const children = sortedWorkspaces.map((workspace, i) => (
          <Workspace
            label={workspace?.name ?? `${i + 1}`}
            workspace={workspace}
          />
        ));
        return children;
      })}
      {...props}
    />
  );
};
