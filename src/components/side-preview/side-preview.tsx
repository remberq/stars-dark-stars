import { FC } from 'react';
import './side-preview.scss';
import { Link } from 'react-router-dom';

import image from '../../assets/image/carol-kennedy-LZiuAFfMg8I-unsplash.jpg';
import war from '../../assets/image/war.jpeg';
import Question from '../main/question/question';

interface SideImageProps {
  className?: string;
}

const SmallImage: FC<SideImageProps> = ({ className }) => (
  <>
    <div className={`small__wrapper ${className}`}>
      <img className={'small__wrapper-image'} src={image} alt="" />
      <h3 className={'small__heading'}>skowronia 2</h3>
      <ul className={'small__list'}>
        <li className={'info__list-item'}>Kraków, ul. Skowronia 1</li>
        <li className={'info__list-item'}>Status : delivered</li>
        <li className={'info__list-item'}>Usable space : 49m2</li>
        <li className={'info__list-item'}>Units :</li>
        <li className={'info__list-item'}>Year : 2013</li>
      </ul>
    </div>
  </>
);

const BigImage: FC<SideImageProps> = ({ className }) => (
  <>
    <div className={`big__wrapper ${className}`}>
      <img className={'big__wrapper-image'} src={war} alt="" />
      <h3 className={'big__heading'}>nordic lights</h3>
      <ul className={'big__list'}>
        <li className={'info__list-item'}>Kraków, ul. Skowronia 1</li>
        <li className={'info__list-item'}>Status : delivered</li>
        <li className={'info__list-item'}>Usable space : 49m2</li>
        <li className={'info__list-item'}>Units :</li>
        <li className={'info__list-item'}>Year : 2013</li>
      </ul>
    </div>
  </>
);

const SidePreview: FC = () => {
  return (
    <>
      <div className={'side__ground'}>
        <main className={'side'}>
          <div className={'side__hero'}>
            <div className={'side__hero-line'}>
              <div className={'hero-line'}></div>
            </div>
            <div className={'side__hero-text'}>
              <h2 className={'hero__heading'}>Delivering projects</h2>
              <p className={'hero__subject'}>from start to finish</p>
              <Link className={'hero__link'} to={'/projects'}>
                see projects
              </Link>
            </div>
          </div>
        </main>
        <section className={'small-image'}>
          <div className={'small-decor'}></div>
          <SmallImage className={'small-1'} />
          <SmallImage className={'small-2'} />
          <SmallImage className={'small-3'} />
        </section>
        <section className={'big-image'}>
          <BigImage className={'big-1'} />
          <div className={'big__decor'}></div>
          <BigImage className={'big-2'} />
          <div className={'small-decor'}></div>
        </section>
        <section className={'small-image middle'}>
          <SmallImage className={'small-4'} />
          <SmallImage className={'small-5'} />
          <SmallImage className={'small-6'} />
          <div className={'small-decor'}></div>
        </section>
        <section className={'combine-image'}>
          <div className={'big__decor'}></div>
          <BigImage className={'big-3'} />
          <SmallImage className={'small-1'} />
          <SmallImage className={'small-7'} />
          <div className={'small-decor'}></div>
        </section>
        <section className={'last-image'}>
          <SmallImage className={'small-4'} />
          <SmallImage className={'small-5'} />
          <div className={'side__decor'}></div>
        </section>
      </div>
      <Question />
    </>
  );
};

export default SidePreview;
