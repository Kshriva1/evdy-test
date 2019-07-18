import React,{Fragment} from 'react';
import Card from './Card';

const CardList = ({ memorials }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default CardList;
