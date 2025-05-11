import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Box } from "astal/gtk3/widget";
import { BatteryLabel, ClockLabel } from "../../components";
import { OSIcon } from "../../components";
import { Workspaces } from "../../components/hyprland";

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;
  const { START, CENTER, END } = Gtk.Align;

  const startChildren = [<OSIcon />, <Workspaces />];
  const centerChildren = [<ClockLabel />];
  const endChildren = [<BatteryLabel />];

  return (
    <window
      className="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={App}
      child={
        <centerbox>
          <Box halign={START} children={startChildren} />
          <Box halign={CENTER} children={centerChildren} />
          <Box halign={END} children={endChildren} />
        </centerbox>
      }
    />
  );
}
