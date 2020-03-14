import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/Home'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '*',
    component: asyncComponent({
      loader: () => import('./container/NotFound'),
      Placeholder: () => <div>...DONT PAGE</div>,
    }),
  },
];
