import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PageMain from './components/PageMain/PageMain';
import PageMenu from './components/PageMenu/PageMenu';
import PageOrders from './components/PageOrders/PageOrders';
import ReactSwipe from 'react-swipe';

class App extends Component {

  state = {
    pageNum: 1,
    addToOrder: []
  }

  addToOrderHandler = (item) =>{
    let meal = this.state.addToOrder.concat(item);
    this.setState({addToOrder:meal});
    meal = {};
  }

  removeHandler = (i) => {
    //this.setState({addToOrder: this.state.addToOrder.splice(this.state.addToOrder.findIndex(v=>v.name === x ), 1)}
    //do this method, or do:
    //const newArray = this.state.addToOrder.slice(); copies the full array and returns it as a new array
    const newArray = [...this.state.addToOrder];
    newArray.splice(i, 1);
    this.setState({addToOrder: newArray})
  }

  emptyOrder = () => {
    this.setState({addToOrder : []})
  }

  render() {
    return (
      <div className="container">
        <div className="layer">
            <Header />
            <ReactSwipe>
                <div className="Main"><PageMain /></div>
                <div className="Menu"><PageMenu add={this.addToOrderHandler} /></div>
                <div className="Orders"><PageOrders cleanOrder={this.emptyOrder} orders={this.state.addToOrder} removeHandler={this.removeHandler}/></div>
            </ReactSwipe>
          </div>
        </div>
    )
  }
}


export default App;
