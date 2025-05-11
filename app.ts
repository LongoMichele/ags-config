import { App } from "astal/gtk3";
import style from "./src/styles/main.scss";
import { Bar } from "./src/widgets";
import { exec } from "astal";
import { getOSIcon, getOSName } from "./src/services/helpers";
import { initWorkspaces } from "./src/services/hyprland";

const assetFolder = "./assets/icons";

App.start({
  css: style,
  icons: assetFolder,
  main() {
    const iconName = getOSName();
    const destPath = `${assetFolder}/${iconName}.svg`.replaceAll(/\/+/g, "/");
    const iconPath = getOSIcon();
    exec(`cp ${iconPath} ${destPath}`);

    App.get_monitors().map(Bar);
  },
});
