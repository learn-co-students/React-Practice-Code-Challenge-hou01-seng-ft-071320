import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushiData: [],
    showingSushi: [],
    count: 0,
    takenSushi: [],
    budget: 50
  }
  componentDidMount(){
    fetch(API)
      .then(res=>res.json())
      .then(data => {
        this.setState({
          sushiData: data,
          showingSushi: data.slice(this.state.count,this.state.count+4)
        })
      })
    }
  renderNext=()=>{
    this.setState({
      count: this.state.count+4,
      showingSushi: this.state.sushiData.slice(this.state.count+4,this.state.count+8)}
    )
  }
  removeSushi=(selectedSushi)=>{
    if (this.state.budget >= selectedSushi.price){
      this.setState({
        takenSushi: [...this.state.takenSushi,selectedSushi],
        budget: this.state.budget-selectedSushi.price
        })
    }
  }

  render() {
    console.log(this.state.takenSushi)
    // console.log(this.state.count)
    return (
      <div className="app">
        <SushiContainer showingSushi={this.state.showingSushi} takenSushi={this.state.takenSushi} renderNext={this.renderNext} removeSushi={this.removeSushi}/>
        <Table budget={this.state.budget}/> 
      </div>
    );
  }
}

export default App;