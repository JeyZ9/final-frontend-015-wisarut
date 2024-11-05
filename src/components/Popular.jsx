import React from 'react'
import iron from '../assets/image/electric-iron.jpg'
import { IoStar, IoStarHalf, IoStarOutline, IoCartOutline  } from "react-icons/io5";

function Popular() {
  return (
    <section className="section-about">
      <div className="section-box-title">
        <h1 className="section-title">Your Choice Plant</h1>
        <p className="section-sub-title">Follow instruction for more</p>
      </div>

      <div className="card-group">
        <div className="card">
          <div className="card-image">
            <img src={iron} alt="" />
          </div>

          <div className="card-content">
            <p className="card-sub-title">Lorem ipsum dolor sit.</p>
            <h2 className="card-title">Electric Iron</h2>
            <div className="star">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
              <IoStarOutline />
            </div>
          </div>

          <div className="">
            <h2></h2>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>

        <div className="">s</div>
        <div className="">s</div>
        <div className="">s</div>
      </div>
    </section>
  );
}

export default Popular