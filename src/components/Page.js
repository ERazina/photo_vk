import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.getPhotos(year)
    }

  render(){
    const {year, photos, isFetching} = this.props;
    return (
      <div className='ib page'>
          <div>
              <button className='btn' onClick={this.onBtnClick}>2018</button>
              <button className='btn' onClick={this.onBtnClick}>2019</button>
              <button className='btn' onClick={this.onBtnClick}>2020</button>
          </div>
        <p>У тебя {isFetching ? "loading..." : photos.length} фото за {year} год</p>
      </div>
    );
  }

}

Page.propTypes = {
    year: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }
