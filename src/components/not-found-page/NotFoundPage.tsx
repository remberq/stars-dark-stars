import React from 'react';
import { NavLink } from 'react-router-dom';
import './error-page.scss';

const rangeData = '123456789012345678901234567890';

const NotFoundPage: React.FC = () => {
  return (
    <main className="container">
      {[...rangeData].map((item, index) => (
        <span key={index} className="particle">
          4
        </span>
      ))}
      {[...rangeData].map((item, index) => (
        <span key={index + item} className="particle">
          0
        </span>
      ))}
      <article className="content">
        <p>Damnit stranger,</p>
        <p>
          You got lost in the <strong>404</strong> galaxy.
        </p>
        <p>
          <NavLink to={'/main'}>
            <button>Go back to earth.</button>
          </NavLink>
        </p>
      </article>
    </main>
  );
};

export default NotFoundPage;
