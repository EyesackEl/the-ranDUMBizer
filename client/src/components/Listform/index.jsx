import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_LIST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import FormItem from '../cards/formItem';

import '../../style/Listform/listform.css';

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

    console.log(payload);

    try {
      const { data } = addList({
        variables: { ...payload },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="new-list-page-container">
      <div className='new-list-content-box'>
        <h1>
          Create a list
        </h1>
        <p>Bless the world with your random assortment of things:</p>

        <form action=''>
          <div className="new-list-form-container">
            <div className='field'>
              <label htmlFor='' className='label'>
                List Name
              </label>
              <div className='control'>
                <input
                  className='input'
                  id='name-input'
                  type='text'
                  placeholder='Enter list name'
                />
              </div>
            </div>
            <div className='field switch-field'>
              <input
                id='publicSwitch'
                type='checkbox'
                name='publicSwitch'
                className='switch'
                onClick={() => setPublicList(!publicList)}
              />
              <label htmlFor='publicSwitch'>Make this list public?</label>
            </div>
          </div>
          <div className="new-list-form-container">
            <div className='field'>
              <label htmlFor='' className='label'>
                Add items to your list!
              </label>

              {itemRow}

              <button
                className='add-item-button'
                type='button'
                onClick={() => {setItems(items + 1);
                console.log(itemRow.length)}}
              >
                <i className='fas fa-plus' /> Add another item
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <button
            type='button'
            className='submit-list-button'
            onClick={() => handleSubmit()}
          >
            Submit list
          </button>
        </form>
      </div>
    </div>
  );
}
