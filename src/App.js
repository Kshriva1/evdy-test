import React, { Fragment,useEffect,useState} from 'react';
import CardList from './components/Cards/CardList';
import Scroll from './components/Scroll/Scroll';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getData } from './actions/data';
import './App.css';

/* parameter to display background using particle.js */
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

const App = ({memorials,getData}) => {
 
  const [sortType, setSortType] = useState('date');

   useEffect(() => {
    getData();
  },[getData])

 /* function to sort the memorials by creation date */
  const sortByCreationDate = (memorials) => {
      memorials.sort(compareValuesByDate);
      return memorials
  }

/* function to sort the memorials by Last Name */
  const sortByLastName = (memorials) => {
      memorials.map(memorial => (
        !memorial.name.last ? memorial.name.last = '' : null
      ))
      memorials.sort(compareValuesByLastName);
      return memorials
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
    <h1 className='f1 tc'>The Memorials</h1>

    { typeof memorials === 'string' ? <Fragment>
      <div className='tc'>
      <h1>Some error occurred while fetching the data</h1>
      </div>
      </Fragment>

       :

     (!memorials.length ?
      <Fragment>
      <div className='tc'>
      <h1>Loading</h1>
      </div>
      </Fragment>

      :

      (<Fragment>
        <div className='tc'>
          <Button className='ma2' color="primary" onClick={e=>changeOrder()}>Sort By Last Name</Button>{' '}
          <Scroll>
            {
              sortType === 'date' ? <CardList memorials={sortByCreationDate(memorials)} /> : 
              <CardList memorials={sortByLastName(memorials)} />
            }
          </Scroll>
        </div>
        </Fragment>
      ))
       }
      </Fragment>
      );
}

const mapStateToProps = state => ({
  memorials: state.data.data
})

export default connect(mapStateToProps,{getData})(App);