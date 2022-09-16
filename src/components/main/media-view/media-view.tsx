import { FC } from 'react';
import './media-view.scss';

import destroy from './stardestroyer.jpeg';
import killer from './art.jpg';
import woman from './woman.png';

const MediaView: FC = () => {
  return (
    <div className={'media-ground'}>
      <section className={'media'}>
        <div className={'media__left'}>
          <div className={'media__left-line'}></div>
          <div className={'media__left-wrapper'}>
            <h3 className={'media__heading'}>VIDEOS</h3>
            <p className={'media__subject'}>see our force</p>
            <p className={'media__ref'}>@ my github</p>
          </div>
        </div>
        <div className={'media__left-decor'}></div>
        <div className={'media__right'}>
          <div className={'media__right-content'}>
            <div className={'start'}>
              <img className={'media__preview'} src={destroy} alt="video-pic" />
              <button className={'media__btn-play'}>PLAY</button>
            </div>
          </div>
          <div className={'media__right-content middle'}>
            <img className={'media__preview'} src={woman} alt="video-pic" />
            <button className={'media__btn-play'}>PLAY</button>
          </div>
          <div className={'media__right-content end'}>
            <img className={'media__preview'} src={killer} alt="video-pic" />
            <button className={'media__btn-play'}>PLAY</button>
          </div>
        </div>
        <div className={'media__decor'}></div>
      </section>
    </div>
  );
};

export default MediaView;
