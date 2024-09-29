import options from "options";
import Container from "scripts/components/Container";
import { range } from "scripts/lib/utils";

const {
  widgets: {
    workspaces: { max = 5 },
  },
} = options;
const hyprland = await Service.import("hyprland");
const baseClass = "workspace";

export default () =>
  Container({
    children: range(max).map((i) => {
      const workspace = hyprland.getWorkspace(i);
      return Widget.Label({
        class_name: baseClass,
        vpack: "center",
        label: `${workspace?.name ?? i}`,
        setup: (self) =>
          self.hook(hyprland, () => {
            self.toggleClassName(
              `${baseClass}--active`,
              hyprland.active.workspace.id === i
            );
            self.toggleClassName(
              `${baseClass}--occupied`,
              (workspace?.windows || 0) > 0
            );
          }),
      });
    }),
  });
