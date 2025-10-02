import React from "react";
import SmartCookingBanner from "../components/SmartCookingBanner";

const About = () => {
  return (
    <>
      {/* Mission section */}
      <section>
        <div className="container built__container">
          <div className="mission__info">
            <p className="mission__our">Our mission</p>
            <h3 className="built__title">
              Help more people cook nourishing meals, more often.
            </h3>
            <p className="built__desc__more">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="built__desc">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>

          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="./assets/images/image-about-our-mission-small.webp"
            />
            <source
              media="(max-width: 768px)"
              srcSet="./assets/images/image-about-our-mission-small.webp"
            />
            <source
              media="(max-width: 1192px)"
              srcSet="./assets/images/image-about-our-mission-large.webp"
            />
            <img
              className="built__image"
              src="./assets/images/image-about-our-mission-large.webp"
              alt="About our mission"
            />
          </picture>
        </div>
      </section>

      {/* Why we exist */}
      <section className="container">
        <div className="exist__container">
          <h2 className="exist__title">Why we exist</h2>
          <ul className="exist__list">
            <li className="exist__item">
              <h4 className="exist__item-title">Cut through the noise.</h4>
              <p className="exist__item-desc">
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
              </p>
            </li>
            <li className="exist__item">
              <h4 className="exist__item-title">Empower home kitchens.</h4>
              <p className="exist__item-desc">
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
              </p>
            </li>
            <li className="exist__item">
              <h4 className="exist__item-title">Make healthy look good.</h4>
              <p className="exist__item-desc">
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Food philosophy */}
      <section className="container">
        <div className="exist__container">
          <h2 className="exist__title">Our food philosophy</h2>
          <ul className="exist__list">
            <li className="exist__item">
              <h4 className="exist__item-title">Whole ingredients first.</h4>
              <p className="exist__item-desc">
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </li>
            <li className="exist__item">
              <h4 className="exist__item-title">Flavor without compromise.</h4>
              <p className="exist__item-desc">
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </li>
            <li className="exist__item">
              <h4 className="exist__item-title">Respect for time.</h4>
              <p className="exist__item-desc">
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </li>
            <li className="exist__item">
              <h4 className="exist__item-title">Sustainable choices.</h4>
              <p className="exist__item-desc">
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Beyond the plate */}
      <section>
        <div className="container built__container">
          <div className="mission__info">
            <h3 className="built__title">Beyond the plate</h3>
            <p className="beyond__desc">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="beyond__list">
              <li className="beyond__item">
                Encourage family dinners and social cooking.
              </li>
              <li className="beyond__item">
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li className="beyond__item">
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>

          <picture>
            <source
              media="(max-width:768px)"
              width={704}
              height={683}
              srcSet="./assets/images/image-about-beyond-the-plate-large.webp"
            />
            <source
              media="(max-width: 1192px)"
              width={618}
              height={600}
              srcSet="./assets/images/image-about-beyond-the-plate-large.webp"
            />
            <img
              className="built__image"
              src="./assets/images/image-about-beyond-the-plate-small.webp"
              alt="beyond the plate"
              width={343}
              height={333}
            />
          </picture>
        </div>
      </section>

      {/* Call to action */}
      <div className="container">
        <SmartCookingBanner />
      </div>
    </>
  );
};

export default About;
