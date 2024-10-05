import options from "options";
import Button from "scripts/components/Button";
import Clock from "scripts/widgets/Clock";
import PowerButton from "scripts/widgets/PowerButton";
import Workspaces from "scripts/widgets/Workspaces";

const {
  windows: {
    launcher: { name: LauncherName },
  },
} = options;

const Spacer = () => Widget.Box({ expand: true });

export default (monitor: number) =>
  Widget.Window({
    monitor,
    anchor: ["top", "right", "left"],
    name: `Bar${monitor}`,
    exclusivity: "exclusive",
    layer: "top",
    child: Widget.CenterBox({
      class_name: "bar",
      start_widget: Widget.Box({
        vpack: "center",
        children: [
          Button({
            onClicked: () => {
              App.toggleWindow(LauncherName);
            },
            child: Widget.Label({ label: "Apps" }),
          }),
          Workspaces(),
        ],
      }),
      center_widget: Widget.Box({
        vpack: "center",
        children: [Clock()],
      }),
      end_widget: Widget.Box({
        vpack: "center",
        children: [Spacer(), PowerButton()],
      }),
    }),
  });
