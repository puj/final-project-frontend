import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../services/api'
import { Spinner } from '../components/Spinner'
import '../styling/advertPage.css'

// Här vill vi ha en bild, pris, namn på vara, beskrivning av vara,
// information om säljare, publiceringsdatum, leveransinfo (katergori), condition, bread crumbs

export const AdvertPage = () => {
  const [advert, setAdvert] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { advertId } = useParams()

  const AD_URL = `http://localhost:8080/adverts/${advertId}`

  useEffect(() => {
    setIsLoading(true)
    fetchData(AD_URL)
      .then((adData) => {
        setAdvert(adData)
        setIsLoading(false)
      })
  }, [AD_URL])

  return (
    <article className="product">
      {isLoading ? <Spinner /> : <img className="product-image" src={advert.imageUrl} alt={advert.title} />}
      <h2 className="product-name">{advert.title}</h2>
      <p className="product-price">{advert.price} SEK</p>
      <section className="product-description product-section">
        <h3 className="product-section-heading">Description</h3>
        <p>
          {advert.description}
        </p>
      </section>
      <section className="product-details product-section">
        <h3 className="product-section-heading">Product details</h3>
        <ul className="product-details-list">
          <li><span className="product-attribute">Category:</span> {advert.category}</li>
          <li><span className="product-attribute">Color:</span> Orange</li>
          <li><span className="product-attribute">Condition:</span> {advert.condition}</li>
        </ul>
      </section>
      <section className="product-buying-details product-section">
        <h3 className="product-section-heading">Buying and shipping</h3>
        <ul className="product-details-list">
          <li><span className="product-attribute">Payment:</span> </li>
          <li><span className="product-attribute">Delivery:</span> {advert.delivery}</li>
          <li><span className="product-attribute">Location:</span> Stockholm</li>
        </ul>
      </section>
      <section className="product-seller-details product-section">
        <h3 className="product-section-heading">Sold by</h3>
        <p className="seller">Seller id: {advert.seller}</p>
        <button type="button">Contact seller</button>
      </section>
      <p className="publishing-details">Posted: {advert.publishedDate}</p>
    </article>
  )
}