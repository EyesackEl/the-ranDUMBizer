import React from 'react';
import '../../style/listcard.css';

export default function List({ props, username }) {
  return (
    <a
      href={`/list/${props._id}`}
      className='tagWrapper content column is-half-desktop is-10 mx-1'
      key={props._id}
    >
      <div>
        <h3 id='projectName'>{props.name}</h3>
        <p className='is-pulled-right'>
          By: <strong>{username}</strong>
        </p>
      </div>
      <button type="button" class="btn btn-danger delButton" id={`${props._id}`}>x</button>
    </a>
  );
}
