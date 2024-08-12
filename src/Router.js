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
const TicTacToe = lazy(() => import('./Pages/TicTacToe/TicTacToe'));
const TrafficLight = lazy(() => import('./Pages/TrafficLight/TrafficLight'));

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
    path: '/tic-tac-toe',
    element: (
      <Suspense fallback='Loading.....'>
        <TicTacToe />
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
  {
    path: '/traffic-light',
    element: (
      <Suspense fallback='Loading.....'>
        <TrafficLight />
      </Suspense>
    ),
  },
]);

export default appRouter;
