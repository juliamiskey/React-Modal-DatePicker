import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="checkout__modals__delivery-date-modal__backdrop">
        <div className="checkout__modals__delivery-date-modal white-background__medium">
        <button><img className="date-picker__header__arrow date-picker__header__arrow__left " src="left-arrow.png" alt="left arrow"/></button>
        <h2 className="checkout__modals__delivery-date-modal__header">July 2018</h2>
        <button><img className="date-picker__header__arrow date-picker__header__arrow__right" src="right-arrow.png" alt="right arrow"/></button>

        <div className="date-picker">
          <div className="date-picker__header">
            <div className="date-picker__cell"><div className="date-picker__cell__item date-picker__header__day">M</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-picker__header__day">T</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-picker__header__day">W</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-picker__header__day">T</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-picker__header__day">F</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-picker__header__day">S</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-picker__header__day">S</div></div>
          </div>
          <div className="date-picker__body">
            <div className="date-picker__cell"><div className="date-picker__cell__item"></div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">1</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">2</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">3</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">4</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">5</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">6</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">7</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">8</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">9</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">10</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">1</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">12</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">13</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">14</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">15</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-unavailable">16</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available date-selected">17</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">18</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">19</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">20</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">21</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">22</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">23</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">24</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">25</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">26</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">27</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">28</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">29</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">30</div></div>
            <div className="date-picker__cell"><div className="date-picker__cell__item date-available">31</div></div>
          </div>
        </div>
        
        <div className="checkout__subtext"><span className="pink-background__tiny">Sunday</span><span>&nbsp;will be your regular delivery day. You can always change this in your account.</span></div>

        <button className="btn checkout__cancel-btn">Cancel, Don't Change</button>
        <button className="btn checkout__confirm-btn">Change Date</button>

        </div>
      </div>
      </div>
    
    );
  }
}

export default App;
