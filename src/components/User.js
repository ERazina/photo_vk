import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class User extends Component {
  renderTemplate = () => {
      const {name, error, isFetching} = this.props; 

      if(error){
      return <div>{this.error}</div>
      }
      if(isFetching) {
        return <p>Загружается...</p>
      }
      if(name){
      return       <div className='ib user'>
                      <p>Привет, {name}!</p>
                  </div>
      }
      else{
        return <button className="btn" onClick={this.props.handleLogin}>Войти</button>
      }
  }
  render(){
    return <div className="ib user">{this.renderTemplate()}</div>
  }

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.func.isRequired
  }
