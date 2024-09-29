import Clock from "scripts/widgets/Clock";
import PowerButton from "scripts/widgets/PowerButton";
import Workspaces from "scripts/widgets/Workspaces";

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
        children: [Workspaces()],
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
