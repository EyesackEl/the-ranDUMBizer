import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_LIST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import FormItem from '../cards/formItem';

export default function ListForm() {
  const itemRow = [];
  const [publicList, setPublicList] = useState(false);
  const [items, setItems] = useState(1);

  const [addList, { error }] = useMutation(ADD_LIST);

  console.log(Auth.getProfile().data._id);

  for (let i = 0; i < items; i++) {
    itemRow.push(<FormItem key={i} />);
  }

  const handleSubmit = function () {
    const name = document.querySelector('#name-input');
    const items = document.querySelectorAll('.item-input');
    const listItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].value.length >= 1) {
        listItems.push(items[i].value);
      }
    }
    const payload = {
      userId: Auth.getProfile().data._id,
      name: name.value,
      listItems: listItems,
      public: publicList,
    };
    console.log(...payload);

    try {
      const { data } = addList({
        variables: { ...payload },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='columns is-centered is-mobile'>
      <div className=' mt-6 box column is-half-mobile is-half-tablet is-one-third-desktop'>
        <h4 className='column block has-text-centered'>
          Go on head witcho bad self
        </h4>

        <form action=''>
          <div className='field'>
            <input
              id='publicSwitch'
              type='checkbox'
              name='publicSwitch'
              className='switch'
              onClick={() => setPublicList(!publicList)}
            />
            <label htmlFor='publicSwitch'>Make this list public?</label>
          </div>
          <div className='field'>
            <label htmlFor='' className='label'>
              List Name
            </label>
            <div className='control'>
              <input
                className='input'
                id='name-input'
                type='text'
                placeholder='WWJD?'
              />
            </div>
          </div>

          <div className='field'>
            <label htmlFor='' className='label'>
              Add items to your list!
            </label>

            {itemRow}

            <button
              className='button is-small is-primary mr-1 is-pulled-right'
              type='button'
              onClick={() => setItems(items + 1)}
            >
              <i className='fas fa-plus' />
            </button>
            <button
              type='button'
              className='button is-medium is-pulled-left is-warning mt-6'
              onClick={() => handleSubmit()}
            >
              <i className='fas fa-2x fa-save' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
