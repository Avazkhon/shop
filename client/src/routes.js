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
    path: '/product',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/Home'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/auth',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/PageAuth'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/create-product',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/CreateProduct'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/create-category',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/CreateCategory'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/categories',
    exact: true,
    component: asyncComponent({
      loader: () => import('./container/Categories'),
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
