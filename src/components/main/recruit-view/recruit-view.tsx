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
        <div className={'recruit__line'}></div>
      </div>
    </section>
  );
};

export default RecruitView;
