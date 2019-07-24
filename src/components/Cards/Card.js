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
    <span>
    <div className='tc grow bg-light-yellow br3 pa5 ma3 dib bw2 shadow-5'>
      <div>
          <h2><Moment date={creationDate} /></h2>
        <h5><p>{firstName + ' ' + middleName + ' ' + lastName}</p></h5>
      </div>
    </div>
    </span>
    </Fragment>
  );
}

export default Card;