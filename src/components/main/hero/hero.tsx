import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './hero.scss';

interface NavInterface {
  isActive: boolean;
}

const Hero: FC = () => {
  const navStyle = ({ isActive }: NavInterface) => {
    return {
      color: isActive ? '#FFC900' : '#232323',
      textDecoration: 'none',
      backgroundColor: isActive ? '#232323' : '#FFFFFF',
    };
  };
  return (
    <div className="image">
      <main className={'hero'}>
        <div className={'hero__line'}>
          <div className={'line'}></div>
        </div>
        <div className={'hero__main'}>
          <div className={'hero__main-wrapper'}>
            <p className="main__text">FORCE</p>
            <p className="main__text">HOPE</p>
            <p className="main__text">JEDI</p>
            <p className={'subtext'}>Do. Or do not.There is no try.</p>
          </div>
          <nav className={'main__nav'}>
            <ul className={'nav__list'}>
              <NavLink style={navStyle} to={'/jedi'} className="nav__list-item">
                JEDI
              </NavLink>
              <NavLink style={navStyle} to={'/force'} className="nav__list-item">
                FORCE
              </NavLink>
              <NavLink style={navStyle} to={'/main'} className="nav__list-item">
                SITH
              </NavLink>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Hero;
