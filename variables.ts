import GLib from "gi://GLib";

export const clock = Variable(GLib.DateTime.new_now_local(), {
  poll: [1000, () => GLib.DateTime.new_now_local()],
});

export const styles = [
  // Spacing
  { name: "spacing-xs", value: "4px" },
  { name: "spacing-s", value: "8px" },
  { name: "spacing-m", value: "16px" },
  { name: "spacing-l", value: "24px" },
  { name: "spacing-xl", value: "32px" },
  { name: "spacing-xxl", value: "40px" },

  // Borders
  { name: "border-tile", value: "#4B545C" },
  { name: "border-active", value: "#3C4043" },
  { name: "border-inactive", value: "#4B545C" },

  // Status Bar
  { name: "status-bg", value: "#1C1E22" },
  { name: "status-text", value: "#D7D9D9" },
  { name: "status-active", value: "#6A7B8A" },

  // Workspace
  { name: "ws-active", value: "#3C4043" },
  { name: "ws-inactive", value: "#4B545C" },
  { name: "ws-occupied", value: "#B0B3B5" },
  { name: "ws-width-inactive", value: "12px" },
  { name: "ws-height-inactive", value: "12px" },
  { name: "ws-width-occupied", value: "14px" },
  { name: "ws-height-occupied", value: "14px" },
  { name: "ws-width-active", value: "16px" },
  { name: "ws-height-active", value: "16px" },
  { name: "ws-border-radius", value: "4px" },
  { name: "ws-spacing", value: "8px" },

  // Windows
  { name: "window-bg", value: "#23272A" },
  { name: "window-bg-alpha", value: "rgba(28, 30, 34, 0.3)" },
  { name: "window-padding-xs", value: "4px 4px" },
  { name: "window-padding-s", value: "8px 12px" },
  { name: "window-padding-m", value: "16px 20px" },
  { name: "window-padding-l", value: "24px 32px" },
  { name: "window-padding-xl", value: "32px 40px" },
  { name: "window-border", value: "2px solid #3A3F47" },
  { name: "window-border-radius", value: "4px" },

  // Taskbar
  { name: "taskbar-bg", value: "transparent" },
  { name: "taskbar-icon-active", value: "#3C4043" },
  { name: "taskbar-icon-inactive", value: "#4B545C" },
  { name: "taskbar-padding", value: "10px 10px 0" },
  { name: "taskbar-margin", value: "0px" },
  { name: "taskbar-border", value: "0px" },
  { name: "taskbar-border-radius", value: "0px" },

  // Tooltips e Menu
  { name: "tooltip-bg", value: "#1C1E22" },
  { name: "tooltip-text", value: "#D7D9D9" },
  { name: "dropdown-bg", value: "#1C1E22" },
  { name: "dropdown-text", value: "#D7D9D9" },

  // Buttons
  { name: "button-inactive", value: "#4B545C" },
  { name: "button-active", value: "#3C4043" },
  { name: "button-focus", value: "#35393F" },
  { name: "button-text", value: "#D7D9D9" },
  { name: "button-border", value: "2px solid #3A3F47" },
  { name: "button-border-active", value: "#6A7B8A" },
  { name: "button-border-focus", value: "#6A7B8A" },
  { name: "button-border-radius", value: "4px" },
  { name: "button-padding-xs", value: "4px 4px" },
  { name: "button-padding-s", value: "8px 12px" },
  { name: "button-padding-m", value: "16px 20px" },
  { name: "button-padding-l", value: "24px 32px" },
  { name: "button-padding-xl", value: "32px 40px" },

  // Inputs (entry)
  { name: "input-text", value: "#D7D9D9" },
  { name: "input-hover-text", value: "#D7D9D9" },
  { name: "input-focus-text", value: "#FFFFFF" },
  { name: "input-selected-text", value: "#FFFFFF" },
  { name: "input-bg", value: "#1C1E22" },
  { name: "input-hover-bg", value: "#23272A" },
  { name: "input-focus-bg", value: "#1C1E22" },
  { name: "input-border", value: "2px solid #ff0000" },
  { name: "input-hover-border", value: "#6A7B8A" },
  { name: "input-focus-border", value: "#6A7B8A" },
  { name: "input-border-radius", value: "4px" },
  { "name": "input-padding-xs", "value": "4px 6px" },
  { "name": "input-padding-s", "value": "8px 12px" },
  { "name": "input-padding-m", "value": "12px 16px" },
  { "name": "input-padding-l", "value": "16px 20px" },
  { "name": "input-padding-xl", "value": "20px 24px" },

  // Container
  { name: "container-bg", value: "#1B1D23" },
  { name: "container-border", value: "2px solid #3A3F47" },
  { name: "container-border-radius", value: "4px" },
  { name: "container-padding-xs", value: "4px 4px" },
  { name: "container-padding-s", value: "8px 12px" },
  { name: "container-padding-m", value: "16px 20px" },
  { name: "container-padding-l", value: "24px 32px" },
  { name: "container-padding-xl", value: "32px 40px" },

  // Font Family
  { name: "font-family", value: "'Roboto', sans-serif" },

  // Font Sizes
  { name: "font-s-small", value: "12px" },
  { name: "font-s-medium", value: "14px" },
  { name: "font-s-large", value: "16px" },
  { name: "font-s-xlarge", value: "20px" },

  // Icon Sizes
  { name: "icon-xs", value: "12px" },
  { name: "icon-s", value: "16px" },
  { name: "icon-m", value: "20px" },
  { name: "icon-l", value: "24px" },
  { name: "icon-xl", value: "32px" },

  // Transition Durations
  { name: "transition-short", value: "0.2s" },
  { name: "transition-medium", value: "0.4s" },
  { name: "transition-long", value: "0.6s" },
];
