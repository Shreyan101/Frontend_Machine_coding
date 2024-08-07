import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Loader from './Pages/Loader/Loader';
import Chess from './Pages/Chess/Chess';
import Stopwatch from './Pages/Stopwatch/Stopwatch';
import FileFolder from './Pages/FileFolder/FileFolder';
import InfiniteScroll from './Pages/InfiniteScroll/InfiniteScroll';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/loader',
    element: <Loader />,
  },
  {
    path: '/chess',
    element: <Chess />,
  },
  {
    path: '/stopwatch',
    element: <Stopwatch />,
  },
  {
    path: '/file-folder',
    element: <FileFolder />,
  },
  {
    path: '/infinite-scroll',
    element: <InfiniteScroll />,
  },
]);

export default appRouter;
