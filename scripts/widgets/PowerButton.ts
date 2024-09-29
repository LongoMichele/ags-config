import options from "options";
import Button from "scripts/components/Button";

const {
  windows: {
    powreMenu: { name: powreMenuName },
  },
} = options;

export default () =>
  Button({
    size: 's',
    child: Widget.Icon({ icon: "system-shutdown-symbolic" }),
    on_clicked: () => App.openWindow(powreMenuName),
  });
