import { IMenuItem } from "common-service";

export const ROUTE = {
  HOME: '',

  GENEALOGY: 'genealogy',

  AUTH: 'auth',
  LOGIN: '',
  LOGOUT: 'log-out',

  NOT_FOUND: '404',
  NO_PERMISSION: '403',
};

export const ROUTE_ICON = {
  MAIN: 'home',
  COMMON: 'admin-menu',
  CHILD_MENU: 'direction-right',
};

export const MENU: Array<IMenuItem> = [
  {
    title: "menu.auth_login",
    label: "menu.auth_login",
    href: ROUTE.HOME,
    permission: [],
    children: [],
  },
  {
    title: "menu.home",
    label: "menu.home",
    href: ROUTE.HOME,
    permission: [],
    children: [],
  },
  {
    title: "menu.genealogy",
    label: "menu.genealogy",
    href: ROUTE.GENEALOGY,
    permission: [],
    children: [],
  },
];
