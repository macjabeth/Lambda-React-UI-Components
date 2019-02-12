import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      <h1>Lambda School</h1>
      <h5>
        @LambdaSchool &#9642; {moment().format('MMM Do')}
      </h5>
    </div>
  )
}

export default HeaderTitle;
