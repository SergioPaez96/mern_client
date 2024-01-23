const SERVER_IP = "127.0.0.1:3977";

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    REGISTER: "auth/sign-up",
    LOGIN: "auth/sign-in",
    REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    USER_ME: "user/me",
    USER: "user",
    USERS: "users",
    MENUS: "menus",
    MENU: "menu",
    COURSE: "course",
    NEWSLETTER: "newsletter",
    POST: "post",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
