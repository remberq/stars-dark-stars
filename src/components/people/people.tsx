import React, { useEffect } from 'react';
import './people.scss';
import { useParams } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getPeopleById } from '../../redux/api/PeopleAction';
import LoadingPage from '../load-page/LoadingPage';

const People: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(getPeopleById(id));
  }, [dispatch, id]);

  const { load, person } = useAppSelector((state) => state.people);
  // if (load) {
  //   return <LoadingPage />;
  // }
  return (
    <DocumentTitle title={person?.name}>
      <div className={'people__ground'}>
        <main className={'people'}>
          <h2 className={'people__heading'}>{person?.name}</h2>
          <div className={'people__wrapper'}>
            <div className={'left'}>
              <img
                className={'people__img'}
                src={`https://starwars-visualguide.com/assets/img/characters/${person?.id}.jpg`}
                alt={person?.name}
              />
            </div>
            <div className={'right'}></div>
          </div>
          <div className={'people__info'}></div>
        </main>
      </div>
    </DocumentTitle>
  );
};

export default People;
