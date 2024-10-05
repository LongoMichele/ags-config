import options from "options";
import Button from "scripts/components/Button";
import { launchApp } from "scripts/lib/utils";
import { type Application } from "types/service/applications";

const apps = await Service.import("applications");
const { query } = apps;

const {
  windows: {
    launcher: { name: launcherWindow },
  },
  services: {
    launcher: { maxResults = 1, favourites = [] },
  },
} = options;

const AppItem = (app: Application) => {
  const icon = Widget.Icon({
    icon: app.icon_name ?? "",
  });

  const title = Widget.Label({
    label: app.name,
    hexpand: true,
    vpack: "center",
    truncate: "end",
  });

  const description = Widget.Label({
    label: app.description,
    hexpand: true,
    wrap: true,
    max_width_chars: 30,
    justification: "left",
    vpack: "center",
  });

  return Button({
    attribute: { app },
    child: Widget.Box({
      children: [
        icon,
        Widget.Box({
          vertical: true,
          vpack: "center",
          children: [title, ...(app.description ? [description] : [])],
        }),
      ],
    }),
    onClicked: () => {
      App.closeWindow(launcherWindow);
      launchApp(app);
    },
  });
};

function SeparatedAppItem(app: Application) {
  return Widget.Revealer(
    { attribute: { app } },
    Widget.Box({ vertical: true }, Widget.Separator(), AppItem(app))
  );
}

export const Launcher = () => {
  const applist = Variable(query(""));
  let first = applist.value[0];

  const list = Widget.Box({
    vertical: true,
    children: applist.value.map(SeparatedAppItem),
    setup: (self) =>
      self.hook(apps, () => (applist.value = query("")), "notify::frequents"),
  });

  return Object.assign(list, {
    filter: (text = "") => {
      first = query(text)[0];
      list.children.reduce((i, item) => {
        if (!text || i >= maxResults) {
          item.reveal_child = false;
          return i;
        }
        if (item.attribute.app.match(text)) {
          item.reveal_child = true;
          return ++i;
        }
        item.reveal_child = false;
        return i;
      }, 0);
    },
    launchFirst: () => launchApp(first),
  });
};
