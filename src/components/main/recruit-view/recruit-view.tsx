import { FC } from 'react';
import './recruit-view.scss';

import image from './ship.jpg';

const RecruitView: FC = () => {
  return (
    <section className={'recruit'}>
      <div className={'recruit-wrapper'}>
        <img className={'recruit__image'} src={image} alt="recruit__image" />
        <div className={'recruit__top'}>
          <p className={'top__text'}>WHY ?</p>
          <p className={'top__subtext'}>we develop and apply processes and technology</p>
        </div>
        <div className={'recruit__bottom'}>
          <p className={'bottom__text'}>
            Coming future requirement will be delivering high quality buildings faster. That is why we develop and apply
            processes and technology to yet deliver homes of tomorrow.
          </p>
        </div>
        <svg
          className={'recruit__line'}
          width="340"
          height="300"
          viewBox="0 0 340 300"
          fillOpacity="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M340 0H221L0 627H127.5L340 0Z" fill="#FFC900" fillOpacity="none" />
        </svg>
      </div>
    </section>
  );
};

export default RecruitView;
