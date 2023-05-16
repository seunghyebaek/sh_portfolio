import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTap = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My journey
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
            className={
              toggleState === 1 
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTap(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div 
            className={
              toggleState === 2 
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTap(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div 
            className={
              toggleState === 1 
              ? "qualification__content qualification__content-active"
              : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Software Engineering</h3>
                <span className="qualification__subtitle">South Korea - University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">Mar 2011 - Feb 2016</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Working Holiday</h3>
                <span className="qualification__subtitle">United Kingdom</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">Jun 2021 - Apr 2023</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Software Engineering</h3>
                <span className="qualification__subtitle">South Korea - University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">Mar 2011 - Feb 2016</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Working Holiday</h3>
                <span className="qualification__subtitle">United Kingdom</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">Jun 2021 - Apr 2023</i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification