
// src/app/auth/jwt.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // (Opcional) No enviar Authorization al endpoint de login
  const isAuthLogin = req.url.includes('/auth/login');

  if (token && !isAuthLogin) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};
