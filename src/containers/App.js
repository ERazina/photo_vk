import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {User} from '../../src/components/User';
import {Page} from '../../src/components/Page.js';
import { getPhotos } from '../actions/PageActions';
import {handleLogin} from '../actions/UserActions';

class App extends Component {
  render(){
    const {user, page, getPhotoAction, handleLoginAction} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Мой топ фото</h1>
        </header>
        <p className="like">Здесь будут залайканные фото</p>
        <div className="row">
          <User handleLogin={handleLoginAction} name={user.name} error={user.error}/>
          <Page photos={page.photos} year={page.year} getPhotos={getPhotoAction} isFetching={page.isFetching}/>
        </div>
      </div>
    );
  }

}


// приклеиваем данные из store
const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotoAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin())
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App)
