import React from 'react';
import '../../style/list.css';

export default function List({ props, username }) {
  return (
    <a
      href={`/list/${props._id}`}
      className='tagWrapper content column-is-two-thirds-desktop column is-10'
      key={props._id}
    >
      <div>
        <h3 id='projectName'>{props.name}</h3>
        <p className='is-pulled-right'>
          By: <strong>{username}</strong>
        </p>
      </div>
    </a>
  );
}
