import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    fourSushis: [],
    selectedSushis: [],
    moneyLeft: 100
  }

  componentDidMount(){
    this.fetchSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          fourSushis={this.state.fourSushis}
          eatSushi={this.eatSushi}
          getMore={this.getMore}
          selectedSushis={this.state.selectedSushis}
        />
        <Table 
          selectedSushis={this.state.selectedSushis}
          moneyLeft={this.state.moneyLeft}
        />
      </div>
    );
  }

  fetchSushi = ()=>{
    fetch(API)
    .then(res=>res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis,
        fourSushis: sushis.sort(() => Math.random() - Math.random()).slice(0, 4)
      })
    })
  }

  eatSushi = (newSushi)=>{
    const newMoneyLeft = this.state.moneyLeft - newSushi.price
    if(newMoneyLeft >= 0){
      let eatenSushi = [...this.state.selectedSushis]
      eatenSushi.push(newSushi)
      this.setState({
        selectedSushis: eatenSushi,
        moneyLeft: newMoneyLeft
      })
    }
  }

  getMore = ()=>{
    let onlyNew = this.state.sushis.filter(sushi => !this.state.selectedSushis.includes(sushi))
    this.setState({
      fourSushis: onlyNew.sort(() => Math.random() - Math.random()).slice(0, 4)
    })
  }

}

export default App;