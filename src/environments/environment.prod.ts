import { IEnvironmentConFig } from "../app/interfaces/common.interface";

export const environment: IEnvironmentConFig = {
  production: true,
  defaultLang: '',
  lang: '',
  token: '',
  assetsUrl: '',
  apiUrl: '',
  email: '',
  phoneNumber: '',
  defaultPageSize: 10,
  timeoutMs: 180000,
  settingFormat: {
    dateTime: {
      date: "DD/MM/YYYY",
      time: "HH:mm:ss a",
      dateTime: "DD/MM/YYYY HH:mm:ss",
      month: "MMM - yyyy",
      year: "yyyy"
    },
  },
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  },
  googleConfig: {
    downloadCV: "",
  },
  remoteModuleUrl: {
    reactManagement: "",
    angularPortfolio: "",
    angularAuth: "",
    angularManagement: '',
    angularWinfitOnline: '',
    vueAnimation: ""
  },
}
