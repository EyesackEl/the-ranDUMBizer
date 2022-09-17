import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_LISTS } from '../../utils/queries';
import ListCard from '../cards/listCard';
import '../../style/Home/home.css';
import diceLogo from '../assets/dice.png';

export default function Home() {
  const { loading, data } = useQuery(QUERY_ALL_LISTS);
  const renderSearchLabel = () => {
    let randNum = Math.floor(Math.random() * 10);

    switch (randNum) {
      case 1:
      case 2:
      case 3:
        return 'Too bored, but not bored enough to be productive? Search for a list:';
      case 4:
      case 5:
      case 6:
        return 'Search for anything:';
      case 7:
      case 8:
      case 9:
        return `Which ${(<em>"x"</em>)} should I watch first?:`;
      default:
        return 'Too bored, but not bored enough to be productive? Search for a list:';
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
