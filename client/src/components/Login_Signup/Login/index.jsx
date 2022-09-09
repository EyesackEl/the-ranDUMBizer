import React, { UseState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';


export default function Login() {

  // state hooks for user data and mutation hook for login check
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // function to update state with every keystroke when typing into username and password bars
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to login with whatever form we choose to render
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <div className='content box'>
      <h1 className='has-text-centered block box'> Login! </h1>
      <div className='columns'>
        <div className='column'>
          <div className='box block'>
            <div class='field'>
              <label class='label'>Username</label>
              <div class='control'>
                <input class='input' type='username' />
              </div>
            </div>

            <div class='field'>
              <label class='label'>Password</label>
              <div class='control'>
                <input class='input' type='password' placeholder='********' />
              </div>
            </div>
            <button className='button is-primary'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
