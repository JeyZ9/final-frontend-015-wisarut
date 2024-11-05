import React from 'react'
import iron from '../assets/image/electric-iron.jpg'

function About() {
  return (
    <section className="section-about">
      <div className="section-box-title">
        <h1 className="section-title">About Us</h1>
        <p className="section-sub-title">Follow instruction for more</p>
      </div>

      <div className="about-blog">
        <div className="about-image">
          <img src={iron} alt="" />
        </div>
        <div className="about-content">
          <h2>Lorem ipsum <span className='text-span'>dolor sit.</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            similique, dolore mollitia blanditiis, ipsa voluptatibus aut iure
            perspiciatis dolorum a ipsum corrupti quo ratione dignissimos
            provident. Incidunt iste odio porro.
          </p>
        </div>
        <div className="about-content">
          <h2>Lorem ipsum <span className='text-span'>dolor sit.</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            minima ratione? Delectus doloribus earum beatae, quisquam dolor
            nihil rerum, explicabo, voluptate natus veniam expedita tempore
            ipsum ipsa deleniti voluptatum inventore!
          </p>
        </div>
        <div className="about-image">
          <img src={iron} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About