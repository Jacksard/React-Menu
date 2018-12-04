import React, { Component } from 'react';
import './PageOrder.css';
import Button from '@material-ui/core/Button';


class PageOrders extends Component {

 state = {
     total: 0
 }

emptyCartHandler = () => {
this.props.cleanOrder();
}

render(){
    var x = 0;
    console.log(this.props.orders.map(p=> x = x + p.price))
    console.log(x)

return(

<div className="container orders">
    <div className="row">
        <div className="col-md-12">
            <h4 id="welcomeTitle">Orders Page</h4>
                <div className="ordersList col-md-12">

                    <ol>
                        {this.props.orders.map((order, i)=>
                        <li key={i}>{order.name} - ${order.price} <Button onClick={(e)=>this.props.removeHandler(i)}><i className="material-icons removeIcon">cancel</i></Button></li>)}
                    </ol>

                    <p className="total">Total: ${x}  </p>
                    <div className="removeIcon">
                    <Button><i className="material-icons removeIcon" onClick={this.emptyCartHandler}>delete_sweep</i></Button>
                    </div>
                </div>
        </div>
    </div>
</div>

);

}
}

export default PageOrders;