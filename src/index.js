import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './layout/Main';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/movie/:id',
          element: <Movie />,
        },
      ],
    },
  ],
  {
    basename: '/react-movies',
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
