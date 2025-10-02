import React from "react";
import { Link } from "react-router-dom";
import SmartCookingBanner from "../components/SmartCookingBanner";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <h2 className="hero__title">
            <span className="highlight">Healthy</span> meals, zero fuss
          </h2>
          <p className="hero__desc">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
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
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="container">
          <div className="get__title">What you’ll get</div>
          <ul className="get__list">
            <li>
              <img
                className="get__item-image"
                src="./assets/images/icon-whole-food-recipes.svg"
                width={60}
                height={60}
                alt="icon-carrot"
              />
              <h4 className="get__item-title">Whole-food recipes</h4>
              <p className="get__item-desc">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </li>
            <li>
              <img
                className="get__item-image"
                src="./assets/images/icon-minimum-fuss.svg"
                width={60}
                height={60}
                alt="icon-flash"
              />
              <h4 className="get__item-title">Minimum fuss</h4>
              <p className="get__item-desc">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </li>
            <li>
              <img
                className="get__item-image"
                src="./assets/images/icon-search-in-seconds.svg"
                width={60}
                height={60}
                alt="icon-search"
              />
              <h4 className="get__item-title">Search in seconds</h4>
              <p className="get__item-desc">
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Built for real life */}
      <section className="container">
        <div className="built__container">
          <div className="built__info">
            <h3 className="built__title">Built for real life</h3>
            <p className="built__desc__more">
              Cooking shouldn’t be complicated. These recipes come in under 30
              minutes of active time, fit busy schedules, and taste good enough
              to repeat.
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
        </div>
      </section>

      {/* Call to action */}
      <div className="container">
        <SmartCookingBanner />
      </div>
    </>
  );
};

export default Home;
