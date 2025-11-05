// client/src/routes/publicRoutes.js

import React, { lazy } from 'react';

const LoginPage = lazy(() => import('../pages/Loginpage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));

const publicRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
    name: 'Login'
  },
  {
    path: '/signup',
    element: <SignupPage />,
    name: 'Sign Up'
  },
];

export default publicRoutes;
