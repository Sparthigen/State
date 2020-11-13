import React from 'react';

import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      person: {
        fullName: 'Ahmed Dhaouadi',
        bio: 'Welcome',
        imgSrc: './pilotImg.jpeg',
        profession: 'Pilot',
      },

      show: false,
      counter: 0
    }
  }


  change = () => {
    this.setState({
      show: !this.state.show
    })
  }
  increment = () => {
    const {counter}= this.state;
    this.setState({counter: counter + 1})
    
  }

  componentDidMount(){

setInterval(this.increment, 1000) 
  
}

  render() {


    return (
      <div className='App'>
        Component Life Cycle : {this.state.counter} <br />
        <button style={{ width: '200px', height: '30px' }} onClick={this.change}> switch</button>

        {this.state.show ?
          <div><br />
            <p>{this.state.person.fullName}</p><br />
            <p>{this.state.person.bio}</p><br />
            <p>{this.state.person.profession}</p><br />
            <img alt='not me' src={this.state.person.imgSrc} /><br />
          </div> : <p>Profile</p>}


      </div>

    )
  }
}
export default App;
