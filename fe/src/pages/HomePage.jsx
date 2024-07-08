import { useEffect } from "react";
import "../pages/Home.scss";

import { Helmet } from "react-helmet";

function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".rental_section, .about-us-section, .simple_steps_container, .discover_container"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target); // Stop observing once it becomes visible
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HomePage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="rental_section">
        <div className="rental_container">
          <div className="masinlar_desc">
            <p className="first_class">
              First class car rental service in Azerbaijan
            </p>
            <p className="rental_car">CarHaven From Just without Deposit</p>
            <p className="our_cars">
              Our cars are matching all required standards and we are offering
              you car rental on most profitable conditions in Azerbaijan
              Republic area.
            </p>
          </div>
          <div>
            <img
              src="https://carrentbaku.az/storage/2022/11/cars-bg-2-768x261.png"
              alt=""
              className="masinlar_img"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="masin_modelleri">
          <img
            src="https://carrentbaku.az/storage/2022/11/kia-189x131-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/bmw-189x131-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/lexus-189x131-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/mercedes-189x131-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/Toyota-189x131-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/range-rover-189x131-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/Mitsubishi-189x131-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/hyundai-190x132-2.png"
            alt=""
            className="masinlar"
          />
          <img
            src="https://carrentbaku.az/storage/2022/11/ford-189x131-2.png"
            alt=""
            className="masinlar"
          />
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us-content">
          <div className="about-us-text">
            <p className="dear">
              Dear guests of our city, we are glad to welcome you as “Car Rent
              Baku” company.
            </p>
            <h2 className="about_us_h1">About us</h2>
            <p className="about_desc">
              Since 2015 “Car Rent Baku” owns the biggest car park in the
              country. Our cars are matching all required standards and we are
              offering you car rental on most profitable conditions. Despite
              large choice of rent-a-car companies, quality and safety
              requirements are not being followed.
            </p>
          </div>
          <div className="about-us-image">
            <img
              src="https://carrentbaku.az/storage/2022/11/sag-blok-hyun-768x391.png"
              alt="Car"
            />
          </div>
        </div>
        <div className="about-us-features">
          <div className="feature">
            <i className="fa-solid fa-book"></i>
            <h3 className="standarts">Highest standards of safety </h3>
            <p>
              We have insurance against theft, crash or damage not initiated by
              the driver
            </p>
          </div>
          <div className="feature">
            <i className="fa-solid fa-car-rear"></i>
            <h3 className="standarts">Our Rental Car Classes in Baku</h3>
            <p>
              Full-Size, Economy, Luxury and Sports Cars as well as SUVs,
              Minivans and Passenger Vans.
            </p>
          </div>
          <div className="feature">
            <i className="fa-solid fa-life-ring"></i>
            <h3 className="standarts">Drive where you want in Azerbaijan</h3>
            <p>
              Mileage for rent car is not obligatory. But you can drive a car
              only in Azerbaijan Republic area
            </p>
          </div>
          <div className="feature">
            <i className="fa-solid fa-money-bill-1-wave"></i>
            <h3 className="standarts">Pay when you arrive at vehicle</h3>
            <p>
              So you don’t have to worry about spending your money until you
              arrive at your vehicle
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="simple_steps_container">
          <div className="simple_step">4 Simple Steps To Buy a Car!</div>

          <div>
            <div className="card_simple_step">
              <div className="icons_simple_step">
                <i className="fa-solid fa-plane"></i>
              </div>
              <div className="desc_simple_step">
                <p className="book_online">
                  Book Online, by Phone, or In Person
                </p>
                <p className="prepayment">
                  You can easily rent a car on our site, and without prepayment.
                </p>
              </div>
            </div>

            <div className="card_simple_step">
              <div className="icons_simple_step">
                <i className="fa-solid fa-car"></i>
              </div>
              <div className="desc_simple_step">
                <p className="book_online">
                  Pay and pick Up Vehicle or Request Pickup
                </p>
                <p className="prepayment">
                  YWe deliver cars to your desired location.
                </p>
              </div>
            </div>

            <div className="card_simple_step">
              <div className="icons_simple_step">
                <i className="fa-solid fa-road"></i>
              </div>
              <div className="desc_simple_step">
                <p className="book_online">
                  Enjoy Unlimited Driving Miles on Your Trip
                </p>
                <p className="prepayment">
                  We do not set a distance limit for cars.
                </p>
              </div>
            </div>

            <div className="card_simple_step">
              <div className="icons_simple_step">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="desc_simple_step">
                <p className="book_online">Drop Off at Valid Location</p>
                <p className="prepayment">
                  It is enough to leave the car at a predetermined point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="discover_container">
          <div className="discover_azerbaijan">
            <p className="discover">Discover </p>{" "}
            <p className="azerbaijan">Azerbaijan</p>
          </div>

          <div className="images_container">
            <div className="caspian_sea">
              <p className="overlay_text">
                The Caspian seaside
              </p>
            </div>
            <div className="oil_boom">
              <p className="overlay_text">Baku’s architecture</p>
            </div>
            <div className="old_city">
              <p className="overlay_text">Baku s Old City</p>
            </div>
            <div className="culture">
              <p className="overlay_text">Culture</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
