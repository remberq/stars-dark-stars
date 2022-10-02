import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './search.scss';

import icons from './index';

const iconData = [
  { name: 'Planets', img: icons.planet, id: 'planets' },
  { name: 'Vehicles', img: icons.falcon, id: 'vehicles' },
  { name: 'People', img: icons.darth, id: 'people' },
  { name: 'Starships', img: icons.death, id: 'starships' },
  { name: 'Films', img: icons.film, id: 'films' },
];

const Search: FC = () => {
  return (
    <>
      <div className={'search__ground'}>
        <section className={'search'}>
          <div className={'how__back search-bg'}>
            <p className={'how__back-title left'}>star</p>
            <p className={'how__back-title right'}>wars</p>
          </div>
          <nav className={'search__icons'}>
            {iconData.map((icon) => {
              return (
                <NavLink to={`/main/${icon.id}`} key={icon.id} className={'search__icon'}>
                  <img src={icon.img} alt={icon.name} className={'icon__img'} />
                  <p className={'icon__text'}>{icon.name}</p>
                </NavLink>
              );
            })}
          </nav>
          <div className={'decor__line'}>
            <NavLink to={'/main'}>
              <h2 className={'decor__line-text'}>main</h2>
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default Search;
