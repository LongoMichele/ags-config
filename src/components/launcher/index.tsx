import { exec } from "astal";
import { getOSName } from "../../services/helpers";

const OSIcon = () => {
  const distro = getOSName();

  return <icon className="icon-lg" icon={distro} />;
};

export default OSIcon;
