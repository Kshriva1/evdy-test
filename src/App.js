import React, { Fragment,useEffect,useState} from 'react';
import CardList from './components/Cards/CardList';
import Scroll from './components/Scroll/Scroll';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import { Button } from 'reactstrap';
import axios from 'axios';
import './App.css';

const particleOptions = {
"particles": {
    "number": {
      "value": 100
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "value": 10,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      }
    },
    "modes": {
      "push": {
        "particles_nb": 12
      }
    }
  }
}

const App = () => {
 
  const [memorials, setMemorials] = useState([]);
  const [sortType, setSortType] = useState('date');

   useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get('https://dev.requiemapp.com/public/memorial/random')
        setMemorials(res.data.data);      
    }
    fetchData();
  },[])

  const sortByDateAscending = (memorials) => {
      memorials.sort(compareValuesByDate);
  }


  const sortByLastName = (memorials) => {
      memorials.sort(compareValuesByLastName)
  }
  
  const compareValuesByDate = (a,b) => {
    let comparison = 0;
      if(a.creationDate < b.creationDate) {
         comparison = -1;
      } else if(a.creationDate > b.creationDate) {
        comparison = 1;
      }
      return comparison;
  }

   const compareValuesByLastName = (a,b) => {
    let comparison = 0;
      if(a.name.last < b.name.last) {
         comparison = -1;
      } else if(a.name.last > b.name.last) {
        comparison = 1;
      }
      return comparison;
  } 

  

  const changeOrder = () => {
     setSortType('lastName')
  }

    return (
     <Fragment>    
    <Logo />
    <Particles className='particles' params={particleOptions} />
     { !memorials.length ?
      <Fragment>
      <div className='tc'>
      <h1>Loading</h1>
      </div>
      </Fragment> :
      ( 
        <Fragment>
         {
           sortType === 'date' ? sortByDateAscending(memorials) : sortByLastName(memorials)
         }
        <div className='tc'>
          <h1 className='f1'>The Memorials</h1>
          <Button className='ma2' color="primary" onClick={e=>changeOrder()}>Sort By Last Name</Button>{' '}
          <Scroll>
            <CardList memorials={memorials} />
          </Scroll>
        </div>
        </Fragment>
      )}
      </Fragment>
      );
}

export default App;
