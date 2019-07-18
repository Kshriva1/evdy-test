import React, { Component } from 'react';
import CardList from './components/Cards/CardList';
import Scroll from './components/Scroll/Scroll';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import { Button } from 'reactstrap';
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

class App extends Component {
  constructor() {
    super()
    this.state = {
      memorials: [],
      sortType: 'date'
    }
  }

  componentDidMount() {
    fetch('https://dev.requiemapp.com/public/memorial/random')
      .then(response=> response.json())
      .then(res=>
        this.setState({memorials:res.data}));    
  }

    sortByDateAscending = (obj1,obj2) => {
      let comparison = 0;
      if(obj1.creationDate < obj2.creationDate) {
         comparison = -1;
      } else if(obj1.creationDate > obj2.creationDate) {
        comparison = 1;
      }
      return comparison;
  }  

  sortByLastName = (obj1,obj2) => {
      let comparison = 0;
      if(obj1.name.last < obj2.name.last) {
         comparison = -1;
      } else if(obj1.name.last > obj2.name.last) {
        comparison = 1;
      }
      return comparison;
  }

  changeOrder = () => {
     this.setState({sortType : 'lastName'})
  }


  render() {
    const { memorials,sortType } = this.state;
    if(sortType === 'date') {
     memorials.sort(this.sortByDateAscending);
    } else if(sortType === 'lastName') {
     memorials.sort(this.sortByLastName);  
    }
    return (
    <div>  
    <Logo />
    <Particles className='particles' params={particleOptions} />
     { !memorials.length ?
      <div className='tc'>
      <h1>Loading</h1>
      </div> :
      (
        <div className='tc'>
          <h1 className='f1'>The Memorials</h1>
          <Button className='ma2' color="primary" onClick={this.changeOrder}>Sort By Last Name</Button>{' '}
          <Scroll>
            <CardList memorials={memorials} />
          </Scroll>
        </div>
      )}
     </div>
      );
  }
}

export default App;
