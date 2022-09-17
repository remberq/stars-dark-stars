import { FC } from 'react';
import './side-preview.scss';
import { Link } from 'react-router-dom';

import image from '../../assets/image/carol-kennedy-LZiuAFfMg8I-unsplash.jpg';

interface SideImageProps {
  className?: string;
}

const SideImage: FC<SideImageProps> = ({ className }) => (
  <>
    <div className={`info__wrapper ${className}`}>
      <img className={'info__image'} src={image} alt="" />
      <h3 className={'info__heading'}>skowronia 2</h3>
      <ul className={'info__list'}>
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
      <section className={'info'}>
        <SideImage className={'info-1'} />
        <SideImage className={'info-2'} />
        <SideImage className={'info-3'} />
      </section>
    </div>
  );
};

export default SidePreview;
