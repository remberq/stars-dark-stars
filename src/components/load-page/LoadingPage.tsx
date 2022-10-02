import React from 'react';

import './loading.scss';
import loading from '../../assets/image/triangle.gif';

const LoadingPage: React.FC = () => {
  return (
    <div className={'loading__ground'}>
      <div className={'loading'}>
        <img src={loading} alt="load-image" className={'load-img'} />
      </div>
    </div>
  );
};

export default LoadingPage;
