import React, { Component } from 'react';
import './PageMenuList.css';
import Icon from '@material-ui/core/Icon';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    close: {
      padding: theme.spacing.unit / 2,
    },
  });

class List extends Component {
    state = {
        open: false
    };

handleClick = () => {
    this.setState({open:false});
};

handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

render(){
    const { classes } = this.props;
    const menuCards = this.props.create.map((item, index)=>
            <div key={index} className="card">
             <Button className="add-button" onClick={()=>this.handleClick()} variant="fab" mini color="secondary" aria-label="Add">
                    <Icon >add-circle</Icon>
                </Button>

            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Note archived</span>}
                action={[
                    <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                    UNDO
                    </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>,
          ]}
        />
                <img className="card-img-top" src={require('../images/'+item.name.slice(0,-1)+'/'+item.name+'.jpg')} alt="cardpicture"/>
                <div className="card-body-background">

                    <div className="card-body">
                        <p className="foodTitle"><b>{item.name}</b></p>
                        <p className="card-text">{item.desc}</p>
                        <p className="card-price"><b>${item.price}</b></p>

                    </div>
                </div>
            </div>

    );
    return (
        <span>{menuCards}</span>
    )
}
}


List.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(List);



//const listthis = this.props.create.map((item)=><li key={item}>{item.name} + {item.price}</li>)



{/* <div className="card" style="width: 18rem;">
  <img className="card-img-top" src="..." alt="Card image cap">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  {require('../images/'+(item.name.slice(0,-1))+'/'+item.name+'.jpg')}
</div>
<img className="card-img-top" src={require('../images/'+item.name.slice(0,-1)+'/'+item.name+'.jpg')} alt="cardpicture"/>



onClick={()=>{this.props.add();this.handleClick()}}
*/}