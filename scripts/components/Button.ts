export default ({ class_name = "", class_names = [], size = "m", ...props }) =>
  Widget.Button({
    class_names: [
      "button",
      `button--${size}`,
      ...class_names,
      ...(class_name ? [class_name] : []),
    ],
    ...props,
  });
