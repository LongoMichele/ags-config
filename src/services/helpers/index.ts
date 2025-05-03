import { exec } from "astal";

export const getOSName = () => {
  const distro = exec("grep ^ID= /etc/os-release")
    .split("=")[1]
    .replaceAll('"', "");
  return distro;
};

export const getOSIcon = () => {
  const iconPath = exec(`find /usr/share/icons -name '*${getOSName()}*'`).split(
    "\n",
  )[0];

  return iconPath;
};
