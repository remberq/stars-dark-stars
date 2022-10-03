import { FC } from 'react';
import './app.scss';
import { Routes, Route } from 'react-router-dom';

import Main from '../components/main/main';
import PeopleList from '../components/side-preview/people-list';
import Search from '../components/search/search';
import Layout from '../components/layout/Layout';
import NotFoundPage from '../components/not-found-page/NotFoundPage';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import People from '../components/people/people';

const App: FC = () => (
  <>
    <Routes>
      <Route path={'/main'} element={<Layout />}>
        <Route path={''} element={<Main />} />
        <Route path={'team'} element={<PeopleList />} />
        <Route path={'/main/team/:id'} element={<People />} />
        <Route path={'films'} element={<PeopleList />} />
      </Route>
      <Route path={'/'} element={<Search />} />
      <Route path={'*'} element={<NotFoundPage />} />
      <Route
        path={'/test/1'}
        element={
          <>
            <Header />
            <People />
            <Footer />
          </>
        }
      />
    </Routes>
  </>
);

export default App;
