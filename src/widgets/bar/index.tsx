import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Box } from "astal/gtk3/widget";
import { BatteryLabel, ClockLabel } from "../../components";
import { OSIcon } from "../../components";

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;
  const { START, CENTER, END } = Gtk.Align;

  return (
    <window
      className="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={App}
      child={
        <centerbox>
          <Box halign={START} children={[<OSIcon />]} />
          <Box halign={CENTER} children={[<ClockLabel />]} />
          <Box halign={END} children={[<BatteryLabel />]} />
        </centerbox>
      }
    />
  );
}
