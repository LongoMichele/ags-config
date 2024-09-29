import options from "options";
import Container from "scripts/components/Container";
import { clock } from "variables";

const {
  widgets: {
    clock: { format },
  },
} = options;

export default () =>
  Container({
    size: "s",
    child: Widget.Label({
      class_name: "text-xl",
      label: clock.bind().as((c) => c.format(format)!),
    }),
  });
