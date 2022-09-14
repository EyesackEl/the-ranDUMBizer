import React from 'react';
import '../../style/listcard.css';

export default function List(props) {
  return (
    <a
      href={`/list/${props._id}`}
      className='tagWrapper content column-is-two-thirds-desktop column is-10'
    >
      <div>
        <h3 id='projectName'>Title{/*props.title*/}</h3>
        <p className='is-pulled-right'>
          {' '}
          By: <strong>Username{/*props.user.username*/}</strong>{' '}
        </p>
      </div>
    </a>
  );
}
