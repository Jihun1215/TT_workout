import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import App from '../App';


import Layout from './Layout/Layout';
import NotFound from './Layout/NotFound';

import Home from '../pages/Home';
import Detail from '../pages/Detail';


const router = createBrowserRouter(
    [
      {
      //첫번째 route는 Mainpage가 아닌 전체 route들의 컨테이너가 될 것.
      //1. path 정하기
      //2. 유저가 해당 url로 이동하거나 location이 그 url과 일치하면
      //3. element를 render
      //4. '/'를 부모로, Mainpage, Subpage 등을 자식으로 생각하기



        path: '/',
        element: <App />,
        errorElement: (
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        ),
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: 'home',
                element: <Home />,
              },
              {
                path: 'detail',
                element: <Detail />,
              },
            ],
          },
        ],
      },
    ],
    { basename: process.env.PUBLIC_URL }
  );


  export default router