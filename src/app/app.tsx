import { FC } from 'react';
import './app.scss';
import { Routes, Route } from 'react-router-dom';

import Main from '../components/main/main';
import PeopleList from '../components/side-preview/people-list';
import Search from '../components/search/search';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../components/not-found-page/NotFoundPage';
import LoadingPage from '../components/load-page/LoadingPage';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const App: FC = () => (
  <>
    <Routes>
      <Route path={'/main'} element={<Layout />}>
        <Route path={''} element={<Main />} />
        <Route path={'team'} element={<PeopleList />} />
        <Route path={'films'} element={<PeopleList />} />
      </Route>
      <Route path={'/main/team/:id'} element={<Search />} />
      <Route path={'/'} element={<Search />} />
      <Route path={'*'} element={<NotFoundPage />} />
      <Route
        path={'/test'}
        element={
          <>
            <Header />
            <LoadingPage />
            <Footer />
          </>
        }
      />
    </Routes>
  </>
);

export default App;
