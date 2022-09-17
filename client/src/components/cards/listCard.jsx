import React from 'react';
import '../../style/listcard.css';

export default function List({ props, username }) {
  return (
    <a
      href={`/list/${props._id}`}
      className='list-container'
      key={props._id}
    >
      <div className="list-info">
        <div className="list-info-header">
        <i class="fa-regular fa-rectangle-list list-icon"></i>
          <h2>
            <strong>{props.name}</strong>
          </h2>
          <h6>Created by <a href='#' className='username'>{username}</a></h6>
        </div> 
        <div className="list-description-container">
          <p><strong>Description:</strong></p>
          <div className="list-description">
            This list is missing a description!
          </div>
        </div>
      </div>
    </a>
  );
}
