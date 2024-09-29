import options from "options";
import Button from "scripts/components/Button";
import PopupWindow from "scripts/components/PopupWindow";

const {
  windows: {
    powreMenu: { name },
  },
} = options;

const actions = [
  { icon: "system-shutdown-symbolic", action: "shutdown now" },
  { icon: "system-reboot-symbolic", action: "reboot" },
  { icon: "system-log-out-symbolic", action: "pkill Hyprland" },
];

const sysButton = ({ icon, action }) =>
  Button({
    child: Widget.Icon({ icon }),
    on_clicked: () => Utils.exec(action),
  });

export default () =>
  PopupWindow({
    name,
    size: "xl",
    child: Widget.Box({
      children: actions.map(sysButton),
    }),
  });
