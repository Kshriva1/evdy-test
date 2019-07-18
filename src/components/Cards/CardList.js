import React from 'react';
import Card from './Card';

const CardList = ({ memorials }) => {
  return (
    <div>
      {
        memorials.map((memorial, i) => {
          return (
            <Card
              key={i}
              creationDate={memorial.creationDate}
              firstName={memorial.name.first}
              middleName={memorial.name.middle}
              lastName={memorial.name.last}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
