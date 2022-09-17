import { FC } from 'react';
import './footer.scss';

import fb from './FB.svg';
import you from './YOU.svg';

const Footer: FC = () => {
  return (
    <div className={'footer__ground'}>
      <footer className={'footer'}>
        <nav className={'footer__nav'}>
          <ul className={'footer__nav-list'}>
            <li className="list__item">Home</li>
            <li className="list__item">films</li>
            <li className="list__item">people</li>
            <li className="list__item">ships</li>
            <li className="list__item">Vehicles</li>
            <li className="list__item">join</li>
            <li className="list__item">contact</li>
          </ul>
        </nav>
        <div className={'footer__copy'}>
          <div className={'copy__wrapper'}>
            <p className={'footer__copy-rights'}>2021 abyard.pl All rights reserved. </p>
            <p className={'footer__copy-policy'}>Privacy policy </p>
          </div>
          <div className={'footer__icons'}>
            <img className={'footer__fb'} src={fb} alt="facebook" />
            <img className={'footer__you'} src={you} alt="youtube" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
