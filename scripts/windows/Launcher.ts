import { type Application } from "types/service/applications";
import { launchApp } from "scripts/lib/utils";
import PopupWindow from "scripts/components/PopupWindow";
import Button from "scripts/components/Button";
import options from "../../options";
import * as AppLauncher from "../services/AppLauncher";
import { EventBoxProps } from "types/widgets/eventbox";
import Container from "scripts/components/Container";

// const terms = "";
// const placeholder = "Search...";
const {
  windows: {
    launcher: { name },
  },
} = options;

function Launcher() {
  const applauncher = AppLauncher.Launcher();

  const help = Widget.Revealer({
    child: Widget.Box({ vertical: true }, Widget.Box()),
  });

  const entry = Widget.Entry({
    hexpand: true,
    primary_icon_name: "system-search-symbolic",
    on_accept: ({ text }) => {
      applauncher.launchFirst();
      App.closeWindow(name);
      entry.text = "";
    },
    on_change: ({ text }) => {
      text ||= "";
      help.reveal_child = text.split(" ").length === 1 && text?.startsWith(":");

      if (!text?.startsWith(":")) applauncher.filter(text);
    },
  });

  function focus() {
    entry.text = "Search";
    entry.set_position(-1);
    entry.select_region(0, -1);
    entry.grab_focus();
  }

  const layout = Widget.Box({
    css: "min-width: 12pt;",
    class_name: "launcher",
    vertical: true,
    vpack: "start",
    setup: (self) =>
      self.hook(App, (_, win, visible) => {
        if (win !== "launcher") return;

        entry.text = "";
        if (visible) focus();
      }),
    children: [Container({ child: entry, size: "xs" }), help, applauncher],
  });

  return layout;
}

export default () =>
  PopupWindow({
    name,
    visible: true,
    child: Widget.Box({
      vertical: true,
      children: [Launcher()],
    }),
  });
