const Spacer = (name: string) =>
  Widget.EventBox({
    expand: true,
    setup: (w) => w.on("button_press_event", () => App.closeWindow(name)),
  });

const ChildPos = ({ pos = "center", child, name }) => {
  const options = {
    start: [child, Spacer(name), Spacer(name)],
    center: [Spacer(name), child, Spacer(name)],
    end: [Spacer(name), Spacer(name), child],
  };
  return options[pos] ?? options.center;
};

export default ({
  name,
  child,
  class_name = "",
  class_names = [],
  size = "xs",
  vPos = "center",
  hPos = "center",
  exclusive = true,
  ...props
}) => {
  const children = ChildPos({
    child: Widget.Box({
      expand: false,
      vertical: true,
      children: ChildPos({
        child: Widget.Box({
          class_name: "window__inner",
          child,
        }),
        name,
        pos: vPos,
      }),
    }),
    name,
    pos: hPos,
  });

  return Widget.Window({
    name,
    class_names: [
      "window",
      `window--${size}`,
      ...(exclusive ? [] : ["window--floating"]),
      ...class_names,
      ...(class_name ? [class_name] : []),
      name,
    ],
    anchor: ["top", "right", "bottom", "left"],
    layer: "top",
    child: Widget.Revealer({
      transition: "slide_down",
      transitionDuration: 200,
      child: Widget.Box({ children }),
      setup: (self) =>
        self.hook(App, (_, wname, visible) => {
          if (wname === name) self.reveal_child = visible;
        }),
    }),
    exclusivity: exclusive ? "ignore" : "normal",
    setup: (w) => w.keybind("Escape", () => App.closeWindow(name)),
    keymode: "on-demand",
    visible: false,
    ...props,
  });
};
