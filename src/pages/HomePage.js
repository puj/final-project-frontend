import React from 'react'
import "../styling/homepage.css"
import yellowchair from "../assets/images/yellowchair.jpeg"
import "../styling/adcard.css"

//DET HÄR ÄR HOMEPAGE

// här vill vi ha en beksrivning av sidan, menu bar, en hero-section, lista med ads, modal-box, footer, header

export const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h2 className="hero-title">Furniture made easy.</h2>
        <p className="hero-tagline">We help you sell your used furniture and give them a new home.</p>
        <button type="button" className="CTA-button">Start selling</button>
      </section>
      <section className="ad-listing">
        <h2 className="ad-listing-header">Recently added</h2>

        <div className="ad-container">
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
        </div>

      </section>
    </>
  )
}