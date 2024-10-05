const Spacer = (name: string) =>
  Widget.EventBox({
    expand: true,
    setup: (w) => w.on("button_press_event", () => App.closeWindow(name)),
  });

export default ({
  name,
  child,
  class_name = "",
  class_names = [],
  size = "xs",
  ...props
}) => {
  return Widget.Window({
    name,
    class_names: [
      "window",
      `window--${size}`,
      ...class_names,
      ...(class_name ? [class_name] : []),
      name,
    ],
    anchor: ["top", "right", "bottom", "left"],
    layer: "top",
    child: Widget.Box({
      children: [
        Spacer(name),
        Widget.Box({
          expand: false,
          vertical: true,
          children: [
            Spacer(name),
            Widget.Box({
              class_name: "window__inner",
              child,
            }),
            Spacer(name),
          ],
        }),
        Spacer(name),
      ],
    }),
    exclusivity: "ignore",
    setup: (w) => w.keybind("Escape", () => App.closeWindow(name)),
    keymode: "on-demand",
    visible: false,
    ...props,
  });
};
