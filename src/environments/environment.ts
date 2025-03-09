import { IEnvironmentConFig } from "../app/interfaces/common.interface";

export const environment: IEnvironmentConFig = {
  production: false,
  defaultLang: 'vi',
  lang: '_lang',
  token: '_token',
  assetsUrl: 'http://localhost:8080/',
  apiUrl: '',
  email: 'trinhthanhtung1010@gmail.com',
  phoneNumber: '+84836450670',
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
    apiKey: "AIzaSyCpRMBZYgwrigZH1hn2o8C7wxYbDFioSdM",
    authDomain: "genealogy-564ae.firebaseapp.com",
    projectId: "genealogy-564ae",
    storageBucket: "genealogy-564ae.firebasestorage.app",
    messagingSenderId: "698023068308",
    appId: "1:698023068308:web:f28096240049387f046a81",
    measurementId: "G-16WV9QSS7Y"
  },
  googleConfig: {
  },
  remoteModuleUrl: {
  },
};
