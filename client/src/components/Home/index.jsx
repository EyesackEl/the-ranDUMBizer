import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_LISTS } from '../../utils/queries';
import ListCard from '../cards/listCard';
import '../../style/Home/home.css';
import diceLogo from '../assets/dice.png';

export default function Home() {
  const { loading, data } = useQuery(QUERY_ALL_LISTS);
  const renderSearchLabel = () => {
    let randNum = Math.floor(Math.random() * 6);

    switch (randNum) {
      case 1:
        return `I've made enough of these switch cases by now. Just search for a list:`;
      case 2:
        return `Bored? Search for a list of ways to be productive member of society:`;
      case 3:
        return `Search for a list - for example, a list of switch cases for this string:`
      case 4:
        return `Search for anything. Example - "classmate's social security numbers":`;
      case 5:
        return `Search for a list of reasons why Ryan's girlfriend hasn't left him yet. Nevermind, try searching for something else:`;
      case 6:
        return `Find your crush's list of favorite movies so you can pretend to have something in common with them:`;
      default:
        return `Bored? Search for a list of ways to be productive member of society:`;
    }
  };

  const GetRandomList = () => {
    let pubLists = [];

    if (!loading) {
      data.lists.map((list) => {
        if (list.public) {
          pubLists.push(list);
        }
      });
    }
    let randNum = Math.floor(Math.random() * pubLists.length);
    let randListId = pubLists[randNum]._id;
    return `/list/${randListId}`;
  };

  return (
    <div>
      <div className='home-container section'>
        <header>
          <img src={diceLogo} alt='logo' className='logo' />
          <h1>
            ran<strong>DUMB</strong>izer
          </h1>
        </header>

        <div className='search'>
          <label htmlFor='list-search'>{renderSearchLabel()}</label>
          <input type='text' className='list-search' id='list-search' />
        </div>

        <p>or...</p>

        {loading ? (
          <div />
        ) : (
          <a href={GetRandomList()}>Take me to a random list</a>
        )}
      </div>

      {/* <div className='section columns is-centered is-mobile'>
        <ListCard />
      </div> */}
    </div>
  );
}
