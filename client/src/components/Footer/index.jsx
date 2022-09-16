import React from 'react';
import { useAppContext } from '../../utils/GlobalState';
import { TOGGLE_DARK_MODE } from '../../utils/actions';
import '../../style/Footer/style.css';

export default function Footer() {
  const [state, dispatch] = useAppContext();
  function toggleDarkMode() {
    dispatch({ type: TOGGLE_DARK_MODE });
  }

  return (
    <footer id='footer'>
      {/* <div id='darkModeCont' className='field'> */}
      <div id='darkModeSwitchDiv' className='field mt-2'>
        <input
          id='darkModeSwitch'
          type='checkbox'
          name='darkModeSwitch'
          className='switch is-rtl is-pulled-right'
          onClick={toggleDarkMode}
        />
        <label htmlFor='darkModeSwitch'>Dark Mode</label>
      </div>
      {/* </div> */}
    </footer>
  );
}
