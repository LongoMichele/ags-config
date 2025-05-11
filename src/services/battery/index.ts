import Battery from "gi://AstalBattery";

const battery = Battery.get_default();

export const getIcon = (percentage: number, charging: boolean) => {
  if (charging) return "󰂄";
  if (percentage >= 1) return "󰁹";
  else if (percentage >= 0.9) return "󰂂";
  else if (percentage >= 0.8) return "󰂁";
  else if (percentage >= 0.7) return "󰂀";
  else if (percentage >= 0.6) return "󰁿";
  else if (percentage >= 0.5) return "󰁾";
  else if (percentage >= 0.4) return "󰁽";
  else if (percentage >= 0.3) return "󰁼";
  else if (percentage >= 0.2) return "󰁻";
  else if (percentage >= 0.1) return "󰁺";
  else return "󰂃";
};

export default battery;
