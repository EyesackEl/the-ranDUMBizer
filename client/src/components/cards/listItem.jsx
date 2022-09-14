import React from 'react';

export default function listItem(props, dataId) {
  return (
    <div className='slide' data-id={dataId}>
      <div className='slide-content'>
        <h1>{props}</h1>
      </div>
    </div>
  );
}
