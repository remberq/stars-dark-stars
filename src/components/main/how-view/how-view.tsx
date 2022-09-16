import { FC } from 'react';
import './how-view.scss';

import pic from './ship-dark.jpg';

const HowView: FC = () => {
  return (
    <div className={'how__ground'}>
      <section className={'how'}>
        <div className={'how__decor'}></div>
        <svg
          className={'how__line'}
          width="340"
          height="300"
          viewBox="0 0 340 300"
          fillOpacity="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M340 0H221L0 627H127.5L340 0Z" fill="#FFC900" fillOpacity="none" />
        </svg>
        <h3 className={'how__title'}>HOW?</h3>
        <p className={'how__subtext'}>
          We constantly strive to improve our quality and speed to become more effective. Therefore, we employ the
          prefabrication technology and constantly improve OUR WAY{' '}
        </p>
        <div className={'how__back'}>
          <p className={'how__back-title left'}>star</p>
          <p className={'how__back-title right'}>death</p>
        </div>
        <div className={'how__image-container'}>
          <svg
            className={'how-svg'}
            width="540"
            height="727"
            viewBox="0 0 540 727"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M340 0H221L0 727H127.5L340 0Z" fill="#FFC900" />
          </svg>
          <img className={'how__image'} src={pic} alt="picture" />
          <div className={'how__text'}>
            <h3 className={'how__text-heading'}>what?</h3>
            <p className={'how__text-subject'}>we construct</p>
            <p className={'how__text-info'}>
              We construct predominantly residential with the core focus on multifamily blocks of flats and large
              single-family housing neighborhoods.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowView;
