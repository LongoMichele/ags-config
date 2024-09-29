import Gtk from "gi://Gtk?version=3.0";
import Gdk from "gi://Gdk";

export const forMonitors = (widget: (monitor: number) => Gtk.Window) => {
  const n = Gdk.Display.get_default()?.get_n_monitors() || 1;
  return range(n, 0).flatMap(widget);
};

/**
 * @returns [start...length]
 */
export const range = (length: number, start = 1) =>
  Array.from({ length }, (_, i) => i + start);

/**
 * @returns true if all of the `bins` are found
 */
export const dependencies = (...bins: string[]) => {
  const missing = bins.filter((bin) =>
    Utils.exec({
      cmd: `which ${bin}`,
      out: () => false,
      err: () => true,
    })
  );

  if (missing.length > 0) {
    console.warn(Error(`missing dependencies: ${missing.join(", ")}`));
    Utils.notify(`missing dependencies: ${missing.join(", ")}`);
  }

  return missing.length === 0;
};

/**
 * @returns execAsync(["bash", "-c", cmd])
 */
export const bash = async (
  strings: TemplateStringsArray | string,
  ...values: unknown[]
) => {
  const cmd =
    typeof strings === "string"
      ? strings
      : strings.flatMap((str, i) => str + `${values[i] ?? ""}`).join("");

  return Utils.execAsync(["bash", "-c", cmd]).catch((err) => {
    console.error(cmd, err);
    return "";
  });
};
