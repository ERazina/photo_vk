import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {User} from '../../src/components/User';
import {Page} from '../../src/components/Page.js';
import { setYear } from '../actions/PageActions';

class App extends Component {
  render(){
    const {user, page, setYearAction} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Мой топ фото</h1>
        </header>
        <p className="like">Здесь будут залайканные фото</p>
        <div className="row">
          <User name={user.name}/>
          <Page photos={page.photos} year={page.year} setYear={setYearAction}/>
        </div>
      </div>
    );
  }

}


// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)),
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App)
