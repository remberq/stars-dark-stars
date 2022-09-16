import { FC } from 'react';
import './question.scss';

const Question: FC = () => {
  return (
    <div className={'question__ground'}>
      <section className={'question'}>
        <div className={'question__content'}>
          <h3 className={'question__content-heading'}>question ?</h3>
          <p className={'question__content-subject'}>make an enquiry</p>
          <div className={'question__decor'}></div>
        </div>
      </section>
    </div>
  );
};

export default Question;
