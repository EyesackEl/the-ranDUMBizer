import React from 'react';
import Auth from '../../utils/auth';

export default function ListForm() {
  return (
    <div className='columns is-centered is-mobile'>
      <div className=' mt-6 box column is-half-mobile is-half-tablet is-one-third-desktop'>
        <h4 className='column block has-text-centered'>
          Go on head witcho bad self
        </h4>

        <form action=''>
          <div className='field'>
            <label htmlFor='' className='label'>
              List Name
            </label>
            <div className='control'>
              <input class='input' type='text' placeholder='WWJD?' />
            </div>
          </div>

          <div className='field'>
            <label htmlFor='' className='label'>
              Add items to your list!
            </label>
            <div className='control'>
              <input class='input' type='text' placeholder='WWJD?' />
              <button className='button is-small is-primary mt-1 mr-1 is-pulled-right'>
                <i className='fas fa-2x fa-check'></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
