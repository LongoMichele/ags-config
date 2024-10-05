import PopupWindow from "scripts/components/PopupWindow";
import options from "../../options";
import { Launcher } from "../services/AppLauncher";

const placeholder = "Search...";

const {
  windows: {
    launcher: { name },
  },
} = options;

const launcher = Launcher();

const entry = Widget.Entry({
  hexpand: true,
  primary_icon_name: "system-search-symbolic",
  on_accept: () => {
    launcher.launchFirst();
    App.closeWindow(name);
    entry.text = "";
  },
  on_change: ({ text }) => {
    text ||= "";
    launcher.filter(text);
  },
});

export default () =>
  PopupWindow({
    name,
    size: "m",
    vPos: "start",
    hPos: "center",
    exclusive: false,
    child: Widget.Box({
      vertical: true,
      vpack: "start",
      setup: (self) =>
        self.hook(App, (_, win, visible) => {
          if (win !== name) return;

          entry.text = "";
          if (visible) {
            entry.text = placeholder;
            entry.set_position(-1);
            entry.select_region(0, -1);
            entry.grab_focus();
          }
        }),
      children: [entry, launcher],
    }),
  });
