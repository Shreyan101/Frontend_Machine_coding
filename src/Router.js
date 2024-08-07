import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';

const Loader = lazy(() => import('./Pages/Loader/Loader'));
const Chess = lazy(() => import('./Pages/Chess/Chess'));
const Stopwatch = lazy(() => import('./Pages/Stopwatch/Stopwatch'));
const FileFolder = lazy(() => import('./Pages/FileFolder/FileFolder'));
const InfiniteScroll = lazy(() =>
  import('./Pages/InfiniteScroll/InfiniteScroll')
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/loader',
    element: (
      <Suspense fallback='Loading.....'>
        <Loader />
      </Suspense>
    ),
  },
  {
    path: '/chess',
    element: (
      <Suspense fallback='Loading.....'>
        <Chess />
      </Suspense>
    ),
  },
  {
    path: '/stopwatch',
    element: (
      <Suspense fallback='Loading.....'>
        <Stopwatch />
      </Suspense>
    ),
  },
  {
    path: '/file-folder',
    element: (
      <Suspense fallback='Loading.....'>
        <FileFolder />
      </Suspense>
    ),
  },
  {
    path: '/infinite-scroll',
    element: (
      <Suspense fallback='Loading.....'>
        <InfiniteScroll />
      </Suspense>
    ),
  },
]);

export default appRouter;
