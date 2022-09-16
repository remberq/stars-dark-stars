import { FC } from 'react';

import './force-user.scss';
import darth from './darth.jpg';

const ForceUser: FC = () => {
  return (
    <div className={'force__ground'}>
      <section className={'force'}>
        <div className={'force__left'}>
          <div className={'force__line'}></div>
          <div className={'force__info'}>
            <h3 className={'force__heading'}>our business model</h3>
          </div>
        </div>
        <div className={'force__right'}>
          <img className={'force__right-image'} src={darth} alt="force user" />
        </div>
        <div className={'force__decor'}></div>
      </section>
    </div>
  );
};

export default ForceUser;
