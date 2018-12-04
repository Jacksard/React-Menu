import React, { Component } from 'react';
import '../PageMenu/PageMenu.css';
import Category from './PageMenuCategory';
import List from './PageMenuList';

class PageMenu extends Component {

    state = {
        showThis: 'starters',
        data : {
            starters : [
                {name:'Starter1', price:32, img:'../images/starter/starter1.jpg', desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'},
                {name:'Starter2', price:22, img:'../images/starter/starter2.jpg', desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'},
                {name:'Starter3', price:12, img:'../images/starter/starter3.jpg', desc:'Delicious starter with lemon and curry juice, served with ketchup'},
                {name:'Starter4', price:42, img:'../images/starter/starter4.jpg', desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'},
                {name:'Starter5', price:62, img:'../images/starter/starter5.jpg', desc:'Delicious starter with lemon and curry juice, served with ketchup'},
                {name:'Starter6', price:52, img:'../images/starter/starter6.jpg', desc:'Some starter with lemon and curry, served with mustard'}],
            mains : [
                {name:'Main1', price:32, img:'../images/mains/main1.jpg', desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'},
                {name:'Main2', price:26, img:'../images/mains/main2.jpg', desc:'Some starter with lemon and curry, served with mustard'},
                {name:'Main3', price:22, img:'../images/mains/main3.jpg', desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'}
            ],
            salads : [
                {name:'Salad1', price:18, desc:'Some starter with lemon and curry, served with mustard'},
                {name:'Salad2', price:16, desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'},
                {name:'Salad3', price:14, desc:'Some starter with lemon and curry, served with mustard'}
            ],
            drinks : [
                {name:'Drink1', price:9, desc:'Some starter with lemon and curry, served with mustard.'},
                {name:'Drink2', price:8, desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'}
            ],
            desserts : [
                {name:'Dessert1',price: 18, desc:'Some starter with lemon and curry, served with mustard.'},
                {name:'Dessert2',price: 12, desc:'Aenean nascetur hac nam lacus semper! Iaculis auctor litora enim.'}
            ]
        },
    }

showCategory = () =>{
  const objKeys = Object.keys(this.state.data);
  return objKeys.map((item, index)=><li key={index}><button id="category" onClick={()=>this.listHandler({item})}>{item}</button></li>);
  //return objKeys.map((item)=><li key={item.length}><button id="category" onClick={()=>this.listHandler({item})}>{item}</button></li>);
}

    // this alters this.state.showThis to the category we want to render.
listHandler = (item) => {
    this.showList(item);
    this.setState({showThis: item.name});
}

    // returns the categories in a list of li's (meals)
showList = (item) => {
    //this.setState({showThis: item})
    //this.listHandler(showThis);
    //console.log(this.state.data)
    //this is the solution:
    return this.state.data[item].map((item, index)=><li key={index}>{item.name}</li>);
}

    // returns this.state.data names for categories
categories = () => {
    const listed = Object.keys(this.state.data);
    return listed;
}

    // Sets the showThis category
pickCategory = (cat) => {

    console.log(this.state.data[cat]);
    this.setState({showThis: cat});
    console.log(this.state.showThis + '<--------------') ;
}

    // Returns the items the category holds.
createList = (cat) =>{
    const showThisList = this.state.data[cat];
    return showThisList;
}

render(){
    return(
        <div className="container">
            <h4 id="welcomeTitle">Menu</h4>
            <div className="row">
                <div className="col-md-2 col-sm-12 navigation centered">
                    <div className="navbar">
                        <ul className="categoryList navbar-nav mr-auto">
                            <Category data={this.categories()} updateCategory={this.pickCategory}/>
                        </ul>
                    </div>
                </div>

                <div className="col-md-10 menuList">

                    <List data={this.state.data} create={this.createList(this.state.showThis)} add={this.props.add}/>

                </div>

            </div>
        </div>
    );
    }
}
export default PageMenu;

//return this.state.data.what.map((item)=><li>{item}</li>);
/* <li key="1"><button className="category btn btn-link" onClick={()=>this.listHandler('starters')}>Starters</button></li>
<li key="2"><button className="category btn btn-link" onClick={()=>this.listHandler('mains')}>Mains</button></li>
<li key="3"><button className="category btn btn-link" onClick={()=>this.listHandler('salads')}>Salads</button></li>
<li key="4"><button className="category btn btn-link" onClick={()=>this.listHandler('drinks')}>Drinks</button></li>
<li key="5"><button className="category btn btn-link" onClick={()=>this.listHandler('desserts')}>Desserts</button></li> */