import React from "react";
import { CiShoppingTag } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import iron from "../assets/image/electric-iron.jpg";
import { CiBoxes, CiBoxList } from "react-icons/ci";
import { BsBoxArrowInDown } from "react-icons/bs";
import { TbAlignBoxBottomLeft } from "react-icons/tb";

function Home() {
  return (
    <section id="home" className="span-container">
      <div className="home-main">
        {/* column 1 */}
        <div className="home-container">
          {/* box 1 */}
          <div className="home-box">
            <h1 className="title">
              <span className="text-span">Lorem</span> ipsum dolor sit amet,{" "}
              <br /> consectetur <span className="text-span">Lorem</span>{" "}
              adipisicing <br /> elit. Officia.
            </h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi
              atque amet quisquam vitae maxime, totam tempora voluptatum cumque
              veritatis quasi eius odio, possimus obcaecati nostrum blanditiis
              eligendi voluptatem? Repellendus?
            </p>
          </div>

          {/* box 2 */}
          <div className="home-box">
            <div className="btn-con">
              <button className="home-btn shop-btn">
                <p>Shop Now</p>
                <CiShoppingTag />
              </button>
              <button className="home-btn know-btn">
                <p>Know More</p>
              </button>
            </div>
            <p className="sub-title">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <ul className="ul-container ul-social">
            <li className="list-social">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="list-social">
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li className="list-social">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="list-social">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>

        {/* column 2 */}
        <div className="image-hero">
          <img src={iron} alt="product" />
        </div>
      </div>

      <div className="blog-container">
        <div className="home-blog">
          <div className="box-title">
            <CiBoxes className="icon" />
            <h3 className="home-blog-title">box</h3>
          </div>
          <p className="home-blog-description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="home-blog">
          <div className="box-title">
            <CiBoxList className="icon" />
            <h3 className="home-blog-title">box</h3>
          </div>
          <p className="home-blog-description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="home-blog">
          <div className="box-title">
            <BsBoxArrowInDown className="icon" />
            <h3 className="home-blog-title">box</h3>
          </div>
          <p className="home-blog-description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="home-blog">
          <div className="box-title">
            <TbAlignBoxBottomLeft className="icon" />
            <h3 className="home-blog-title">box</h3>
          </div>
          <p className="home-blog-description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
