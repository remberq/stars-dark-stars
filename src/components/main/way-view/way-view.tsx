import { FC } from 'react';

import './way-view.scss';

const WayView: FC = () => {
  return (
    <div className={'way__ground'}>
      <section className={'way'}>
        <div className={'way__decor-top'}></div>
        <div className={'way__top'}>
          <div className={'way__top-heading'}>
            <div className={'rectangle'}></div>
            <h3 className={'heading'}>OUR WAY</h3>
          </div>
          <div className={'top__text'}>
            <p className={'top__text-info'}>
              Our proven process is Design for Manufacture and Assembly. That is our way for delivering quality and
              effectiveness.
            </p>
            <p className={'top__text-info'}>
              It starts with the drawing board and detailed planning for the precise production and the speedy onsite
              assembly.
            </p>
          </div>
        </div>
        <div className={'way__decor-bottom'}></div>
      </section>
    </div>
  );
};

export default WayView;
