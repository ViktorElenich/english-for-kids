import React, {FC} from 'react';
import './Preloader.scss';

const Preloader: FC = () => {
  return (
    <div className="preloader__container">
      <div className="preloader"></div>
    </div>
  );
}

export default Preloader;