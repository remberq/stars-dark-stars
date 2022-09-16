import { FC } from 'react';

import './main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

import Hero from './hero/hero';
import RecruitView from './recruit-view/recruit-view';
import FutureView from './future-view/future-view';
import HowView from './how-view/how-view';
import WayView from './way-view/way-view';
import MediaView from './media-view/media-view';
import ForceUser from './force-user/force-user';
import Question from './question/question';

const Main: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <RecruitView />
      <FutureView />
      <HowView />
      <WayView />
      <MediaView />
      <ForceUser />
      <Question />
      <Footer />
    </>
  );
};

export default Main;
