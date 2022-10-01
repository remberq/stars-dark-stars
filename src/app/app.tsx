import { FC } from 'react';
import './app.scss';
import { Routes, Route } from 'react-router-dom';

import Main from '../components/main/main';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import SidePreview from '../components/side-preview/side-preview';
import Search from '../components/search/search';

const App: FC = () => (
  <>
    <Header />
    <Routes>
      <Route path={'/team'} element={<SidePreview />} />
      <Route path={'/'} element={<Main />}>
        <Route path={'/sith'} element={<Main />} />
        <Route path={'/jedi'} element={<Main />} />
        <Route path={'/force'} element={<Main />} />
      </Route>
      <Route path={'/search'} element={<Search />} />
    </Routes>
    <Footer />
  </>
);

export default App;
