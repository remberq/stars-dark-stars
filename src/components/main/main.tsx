import { FC } from 'react';

import './main.scss';
import Header from '../header/header';

import Hero from './hero/hero';
import RecruitView from './recruit-view/recruit-view';

const Main: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <RecruitView />
    </>
  );
};

export default Main;
