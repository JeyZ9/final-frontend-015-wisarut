import React from 'react'
import iron from '../assets/image/electric-iron.jpg'

function Review() {
  return (
    <section id="review">
      <div className="section-box-title">
        <h1 className="section-title">Customer Review</h1>
        <p className="section-sub-title">Follow instruction for more</p>
      </div>

      <div className="box-review">
        <div className="review-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            impedit nihil voluptatum distinctio ullam mollitia nostrum aliquid
            explicabo fuga. Cupiditate, consectetur quibusdam assumenda
            molestias fuga accusantium obcaecati qui quo harum?
          </p>
          <div className="cus-content">
            <div className="customer-image">
              <img src={iron} alt="" />
            </div>
            <div className="cus-info">
              <h3 className="cus-name">Wisarut</h3>
              <p className="cus-des">Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="review-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            impedit nihil voluptatum distinctio ullam mollitia nostrum aliquid
            explicabo fuga. Cupiditate, consectetur quibusdam assumenda
            molestias fuga accusantium obcaecati qui quo harum?
          </p>
          <div className="cus-content">
            <div className="customer-image">
              <img src={iron} alt="" />
            </div>
            <div className="cus-info">
              <h3 className="cus-name">Wisarut</h3>
              <p className="cus-des">Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="review-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            impedit nihil voluptatum distinctio ullam mollitia nostrum aliquid
            explicabo fuga. Cupiditate, consectetur quibusdam assumenda
            molestias fuga accusantium obcaecati qui quo harum?
          </p>
          <div className="cus-content">
            <div className="customer-image">
              <img src={iron} alt="" />
            </div>
            <div className="cus-info">
              <h3 className="cus-name">Wisarut</h3>
              <p className="cus-des">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review