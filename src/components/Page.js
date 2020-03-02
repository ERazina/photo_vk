import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './page.css';

export class Page extends Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.getPhotos(year);
        // this.props.makeYearPhotos(this.props.photos, this.props.year);
        // this.props.getMorePhotos();
    }

  render(){
    const {year, photos, isFetching} = this.props;

    return (
      <div className='ib page'>
          <div>
              <button className='btn' onClick={this.onBtnClick}>2014</button>
              <button className='btn' onClick={this.onBtnClick}>2015</button>
              <button className='btn' onClick={this.onBtnClick}>2016</button>
              <button className='btn' onClick={this.onBtnClick}>2017</button>
              <button className='btn' onClick={this.onBtnClick}>2018</button>
              <button className='btn' onClick={this.onBtnClick}>2019</button>
              <button className='btn' onClick={this.onBtnClick}>2020</button>
          </div>
        <p>У тебя {isFetching ? "loading..." : photos.length} фото за {year} год</p>
        {photos.length !== 0 ?
          photos.map((element, index) => 
            <div key={index} className="page-flex">
              <img src={element.sizes[0].url}></img>
              <p>{element.likes.count}</p>
            </div>
          ) :
        null
      }
      </div>
      )
    }
  }


Page.propTypes = {
    year: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }
