import { FC } from 'react';
import './recruit-view.scss';

const RecruitView: FC = () => {
  return (
    <section className={'recruit'}>
      <div className={'recruit-wrapper'}>
        <div className={'recruit__top'}></div>
        <div className={'recruit__bottom'}></div>
      </div>
    </section>
  );
};

export default RecruitView;
