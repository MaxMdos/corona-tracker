import React from 'react';
import DataCard from './components/data-card'
import './App.css';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loaded: false,
      data: {}
    }
  }

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api")
      .then(response => response.json())
      .then(result => this.setState({
        loaded: true,
        data: result
        }))
  }

  /*
    I saw my initial problem as to why my state was not changing:
    my inistal variable in the render() was not the same name
    as in the constructor.
    Also, I had the wrong data name.
  */
  render(){
    const {loaded, data} = this.state;
    console.log(data)
    if (!loaded){
      return (
        <div className="App">
          <div className="App-header">
          <p>Not loaded</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <div className="App-header">
          <DataCard {...data}/>
          </div>
        </div>
      )
    }
  }
}
