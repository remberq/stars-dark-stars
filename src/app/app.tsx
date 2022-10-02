import { FC } from 'react';
import './app.scss';
import { Routes, Route } from 'react-router-dom';

import Main from '../components/main/main';
import SidePreview from '../components/side-preview/side-preview';
import Search from '../components/search/search';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../components/not-found-page/NotFoundPage';

const App: FC = () => (
  <>
    <Routes>
      <Route path={'/main'} element={<Layout />}>
        <Route path={''} element={<Main />} />
        <Route path={'team'} element={<SidePreview />} />
        <Route path={'films'} element={<SidePreview />} />
      </Route>
      <Route path={'/'} element={<Search />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
