import React from 'react';
import '../../assets/CommonStyle/loader.css';

const CustomLoader = ({ loading }) => {
  return (
    loading && (
        <div className='loadLoad'>
            <div className='loadingLoader'></div>
        </div>
    )
  );
};

export default CustomLoader;


