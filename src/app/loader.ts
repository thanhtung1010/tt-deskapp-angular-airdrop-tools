import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const HTTPLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');
