import React, { Component } from "react";
import logo from "../img/logo.png";
import user from "../img/user.jpg";
import { Icon } from "semantic-ui-react";
import hotelOne from "../img/hotel-1.jpg";
import hotelTwo from "../img/hotel-2.jpg";
import hotelThree from "../img/hotel-3.jpg";
import userThree from "../img/user-3.jpg";
import userFour from "../img/user-4.jpg";
import userFive from "../img/user-5.jpg";
import userSix from "../img/user-6.jpg";
import userOne from "../img/user-1.jpg";
import userTwo from "../img/user-2.jpg";

export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} alt="trillo logo" className="logo" />

          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search hotels"
            />
            <button className="search__button">
              <div className="search__icon">
                <Icon disabled name="search" />
              </div>
            </button>
          </form>

          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <div className="user-nav__icon">
                <Icon disabled name="users" />
              </div>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <div className="user-nav__icon">
                <Icon disabled name="wechat" />
              </div>

              <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
              <img
                src={user}
                alt="user_photo"
                className="user-nav__user-photo"
              />
              <span className="user-nav__user-name">Jonas</span>
            </div>
          </nav>
        </header>

        <div className="content">
          <nav className="sidebar">
            <ul className="side-nav">
              <li className="side-nav__item side-nav__item--active">
                <a href="#" className="side-nav__link">
                  <Icon name="home" className="side-nav__icon" />
                  <span>Hotel</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon name="plane" className="side-nav__icon" />

                  <span>Flight</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon name="car" className="side-nav__icon" />
                  <span>Car Rental</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon name="home" className="side-nav__icon" />
                  <span>Tours</span>
                </a>
              </li>
            </ul>

            <div className="legal">&copy; 2020 by Obeisun Timothy</div>
          </nav>

          <main className="hotel-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img
                  src={hotelOne}
                  alt="photo_of_hotel_1"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotelTwo}
                  alt="photo_of_hotel_2"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotelThree}
                  alt="photo_of_hotel_3"
                  className="gallery__photo"
                />
              </figure>
            </div>

            <div className="overview">
              <h1 className="overview__heading">Eko Hotel</h1>
              <div className="overview__stars">
                <Icon name="star" className="overview__icon-star" />
                <Icon name="star" className="overview__icon-star" />
                <Icon name="star" className="overview__icon-star" />
                <Icon name="star" className="overview__icon-star" />
                <Icon name="star" className="overview__icon-star" />
              </div>
              <div className="overview__location">
                <Icon
                  name="location arrow"
                  className="overview__icon-location"
                />
                <button className="btn-inline">Island,Lagos</button>
              </div>
              <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">427 votes</div>
              </div>
            </div>

            <div className="detail">
              <div className="description">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi nisi dignissimos debitis ratione sapiente saepe.
                  Accusantium cumque, quas, ut corporis incidunt deserunt quae
                  architecto voluptate.
                </p>
                <p className="paragraph">
                  Accusantium cumque, quas, ut corporis incidunt deserunt quae
                  architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
                <ul className="list">
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    Close to the beach
                  </li>
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    breakfast Included
                  </li>
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    Free airport shuttle
                  </li>
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    Free wifi in all rooms
                  </li>
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    Air conditioning and heating
                  </li>
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    Pets Allowed
                  </li>
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    We Speak all Languages
                  </li>
                  <li className="list__item">
                    <Icon
                      name="chevron right"
                      className="overview__icon-chevron"
                    />
                    Perfect for families
                  </li>
                </ul>
                <div className="recommend">
                  <p className="recommend__count">
                    Lucy and 3 other friends recommend this hotel
                  </p>
                  <div className="recommend__friends">
                    <img
                      src={userThree}
                      alt="Friend 1"
                      className="recommend__photo"
                    />
                    <img
                      src={userFour}
                      alt="Friend 2"
                      className="recommend__photo"
                    />
                    <img
                      src={userFive}
                      alt="Friend 3"
                      className="recommend__photo"
                    />
                    <img
                      src={userSix}
                      alt="Friend 4"
                      className="recommend__photo"
                    />
                  </div>
                </div>
              </div>
              <div className="user-reviews">
                <figure className="review">
                  <blockquote className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga doloremque architecto dicta animi, totam, itaque
                    officia ex.
                  </blockquote>
                  <figcaption className="review__user">
                    <img src={userOne} alt="user_1" className="review__photo" />
                    <div className="review__user-box">
                      <p className="review__user-name">Obeisun Timothy</p>
                      <p className="review__user-date">May 3rd, 2020</p>
                    </div>
                    <div className="review__rating">8.8</div>
                  </figcaption>
                </figure>

                <figure className="review">
                  <blockquote className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga doloremque architecto dicta animi.
                  </blockquote>
                  <figcaption className="review__user">
                    <img src={userTwo} alt="user_1" className="review__photo" />
                    <div className="review__user-box">
                      <p className="review__user-name">Faniran Olaitan</p>
                      <p className="review__user-date">April 7th, 2020</p>
                    </div>
                    <div className="review__rating">7.2</div>
                  </figcaption>
                </figure>

                <button className="btn-inline">
                  Show all <span>&rarr;</span>
                </button>
              </div>
            </div>
            <div className="cta">
              <div className="cta__book-now">
                Good News! We have 4 free rooms for your selected dates!
              </div>
              <button className="btn">
                <span className="btn__visible">Book Now</span>
                <span className="btn__invisible">Only 4 rooms left!</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
