import React from 'react';
import data from './data';

const List = ({ person }) => {
  return (
    person.map((person) => {
      const { id, name, age, image } = person;
      return(
        <div key={ id } className='person'>
          <img src={ image } alt="" />
          <div>
            <h4>{ name }</h4>
            <p>{ age } years</p>
          </div>
        </div>
      );
    })
  );
};

export default List;
