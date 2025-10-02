import React from "react";
import { Link } from "react-router-dom";
import SmartCookingBanner from "../components/SmartCookingBanner";

const Home = () => {
  return (
    <>
      <section className="hero container">
        <h2 className="hero__title">
          <span className="highlight">Healthy</span> meals, zero fuss
        </h2>
        <p className="hero__desc">
          Discover quick, whole-food recipes you can cook tonight.
        </p>

        <div className="hero__container">
          <Link to="/recipes" className="btn start__btn">
            Start exploring
          </Link>
          <img
            className="hero__image"
            src="./assets/images/image-home-hero-large.webp"
            alt="delicious meal"
            width={1192}
            height={530}
          />
        </div>
      </section>

      <section className="container built__container">
        <div className="built__info">
          <h3 className="built__title">Built for real life</h3>
          <p className="built__desc__more">
            Cooking shouldn’t be complicated. These recipes take under 30
            minutes and fit busy schedules.
          </p>
          <p className="built__desc">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        <img
          className="build__image"
          src="./assets/images/image-home-real-life-large.webp"
          alt="real-life cooking"
          width={635}
          height={450}
        />
      </section>

      <div className="container">
        <SmartCookingBanner />
      </div>
    </>
  );
};

export default Home;
