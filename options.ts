const options = {
  windows: {
    powreMenu: {
      name: "powermenu",
    },
    launcher: {
      name: "launcher",
    },
  },
  services: {
    launcher: {
      maxResults: 5,
      favourites: ["firefox"],
    },
  },
  widgets: {
    workspaces: {
      max: 5,
    },
    clock: {
      format: "%H : %M",
    },
  },
};

export default options;
