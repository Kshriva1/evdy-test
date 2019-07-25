/* This component displays the creation date of each memorial in the M/D/YYYY HH:mm:ss format and the name of the decedant. 
If any of the first name, middle name or last name is null or undefined then it assumes it as an empty string. */

import React,{Fragment} from 'react';
import Moment from 'react-moment';

const Card = ({ creationDate, firstName, middleName, lastName }) => {
  if(!firstName){
  	firstName = ''
  }
   if(!middleName){
  	middleName = ''
  }
   if(!lastName){
  	lastName = ''
  }

  return (
    <Fragment>
    <div className='tc grow bg-light-yellow br3 pa5 ma3 dib bw2 shadow-5'>
      <div>
          <h2><Moment format='M/D/YYYY HH:mm:ss'>{creationDate}</Moment></h2>
        <h5><p>{firstName + ' ' + middleName + ' ' + lastName}</p></h5>
      </div>
    </div>
    </Fragment>
  );
}

export default Card;