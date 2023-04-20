import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RedirectInterceptor } from './redirect.interceptor';

export const redirectInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true },
];
