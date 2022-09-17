import { FC } from 'react';
import { Link } from 'react-router-dom';

import './future-view.scss';

const FutureView: FC = () => {
  return (
    <div className={'future__image'}>
      <section className={'future'}>
        <div className={'future__wrapper'}>
          <div className={'future__heading'}>HOMES OF TOMORROW</div>
          <Link className={'future__link'} to={'/team'}>
            THE TEAM
          </Link>
        </div>
        <div className={'future__decor'}></div>
      </section>
    </div>
  );
};

export default FutureView;
