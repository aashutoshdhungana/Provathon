export const userRoutes = {
  DASHBOARD: "/",
  main: "/users",
  branch: {
    REGISTER: "/register",
    BOOKMARKS: "/bookmarks",
  },
};

export const homestayRoutes = {
  main: "/homestay",
  branch: {
    REGISTER: "/register",
    PROFILE: "/:id",
    EDIT: "/edit/:id",
  },
};

export const commonRouters = {
  SEARCH: "/search",
  LOGIN: "/signin",
};
