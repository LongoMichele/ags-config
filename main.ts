import "scripts/lib/session";
import "styles/style";
import { forMonitors } from "scripts/lib/utils";
import Bar from "scripts/windows/Bar";
import PowerMenu from "scripts/windows/PowerMenu";

App.config({
  icons: "./assets",
  windows: [PowerMenu(), ...forMonitors(Bar)],
});
