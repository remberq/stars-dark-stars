import { FC, useEffect } from 'react';
import './side-preview.scss';
import { NavLink, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import war from '../../assets/image/war.jpeg';
import Question from '../main/question/question';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { searchAllPeople } from '../../redux/api/PeopleAction';
import { SWPeopleDTO } from '../../types/SWPeopleDTO';
import LoadingPage from '../load-page/LoadingPage';

interface SideImageProps {
  className?: string;
  people: SWPeopleDTO;
}

const SmallImage: FC<SideImageProps> = ({ className, people }) => {
  return (
    <div className={`small__wrapper ${className}`}>
      <img
        className={'small__wrapper-image'}
        src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`}
        alt=""
      />
      <NavLink to={`${people.id}`}>
        <h3 className={'small__heading'}>{people.name}</h3>
      </NavLink>
      <ul className={'small__list'}>
        <li className={'info__list-item'}>Birth Year : {people.birth_year}</li>
        <li className={'info__list-item'}>Gender : {people.gender}</li>
        <li className={'info__list-item'}>Mass : {people.mass}</li>
        <li className={'info__list-item'}>Eye : {people.eye_color}</li>
        <li className={'info__list-item'}>Height : {people.height}</li>
      </ul>
    </div>
  );
};

const BigImage: FC<Partial<SideImageProps>> = ({ className }) => (
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

const PeopleList: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(searchAllPeople(''));
  }, [dispatch]);
  const { people, load } = useAppSelector((state) => state.people);
  if (load) {
    return <LoadingPage />;
  }
  console.log(people, load);
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
          <SmallImage people={people[0]} className={'small-1'} />
          <SmallImage people={people[3]} className={'small-2'} />
          <SmallImage people={people[4]} className={'small-3'} />
        </section>
        <section className={'big-image'}>
          <BigImage className={'big-1'} />
          <div className={'big__decor'}></div>
          <BigImage className={'big-2'} />
          <div className={'small-decor'}></div>
        </section>
        <section className={'small-image middle'}>
          <SmallImage people={people[2]} className={'small-4'} />
          <SmallImage people={people[1]} className={'small-5'} />
          <SmallImage people={people[7]} className={'small-6'} />
          <div className={'small-decor'}></div>
        </section>
        <section className={'combine-image'}>
          <div className={'big__decor'}></div>
          <BigImage className={'big-3'} />
          <SmallImage people={people[6]} className={'small-1'} />
          <SmallImage people={people[8]} className={'small-7'} />
          <div className={'small-decor'}></div>
        </section>
        <section className={'last-image'}>
          <SmallImage people={people[5]} className={'small-4'} />
          <SmallImage people={people[9]} className={'small-5'} />
          <div className={'side__decor'}></div>
        </section>
      </div>
      <Question />
    </>
  );
};

export default PeopleList;
