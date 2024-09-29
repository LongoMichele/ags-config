export default ({ size = "xs", class_name = "", class_names = [], ...props }) =>
  Widget.Box({
    class_names: [
      "container",
      `container--${size}`,
      ...class_names,
      ...(class_name ? [class_name] : []),
    ],
    ...props,
  });
