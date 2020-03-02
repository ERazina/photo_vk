import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {User} from '../../src/components/User';
import {Page} from '../../src/components/Page.js';
import { getPhotos } from '../actions/PageActions';
import {handleLogin} from '../actions/UserActions';
import {makeYearPhotos} from '../actions/PageActions';
import {getMorePhotos} from '../actions/PageActions';

class App extends Component {
  render(){
    const {user, page, getPhotoAction, handleLoginAction, makeYearPhotosAction, getMorePhotosAction} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Мой топ фото</h1>
        </header>
        <div className="row">
          <User handleLogin={handleLoginAction} name={user.name} error={user.error}/>
          <Page 
            photos={page.photos} 
            year={page.year} 
            getPhotos={getPhotoAction}
            isFetching={page.isFetching} 
            makeYearPhotos={makeYearPhotosAction}
            // getMorePhotos={getMorePhotosAction}
            />
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
    handleLoginAction: () => dispatch(handleLogin()),
    makeYearPhotosAction: (photos, selectedYear) => dispatch(makeYearPhotos(photos, selectedYear)), 
    getMorePhotosAction: (offset, count, year, dispatch) => dispatch(getMorePhotos(offset, count, year, dispatch))
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App)
