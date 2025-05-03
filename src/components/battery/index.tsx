import { bind } from "astal";
import battery, { getIcon } from "../../services/battery";
import { Gtk } from "astal/gtk3";

const BatteryLabel = () => {
  return (
    <label
      halign={Gtk.Align.END}
      label={bind(battery, "updateTime").as(() => {
        const p = battery.get_percentage();
        const charging = battery.get_charging();
        const percentage = `${p * 100}%`;
        const icon = getIcon(p, charging);
        return `${percentage}  ${icon}`;
      })}
    />
  );
};

export default BatteryLabel;
