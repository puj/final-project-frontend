import React, { useState, useEffect } from 'react'
import { fetchData, fetchDataWithHeaders } from '../services/api'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'
import '../styling/profilepage.css'
import userlogo from '../assets/images/userlogo.png'

// här vill vi visa kontaktinfo samt aktiva annonser (kunna ändra annons?)
// Hälsa på den inoggades namn 
// Stretch: om vi vill lägga till favoriter vill vi kunna se dem här 

export const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const userId = localStorage.getItem('id')
  const accessToken = localStorage.getItem('accessToken')
  const profileUrl = `http://localhost:8080/users/${userId}/profile`
  const headerOptions = { 'Authorization': accessToken }

  const fetchUserProfile = (url) => {
    setIsLoading(true)
    fetch(profileUrl, { headers: { 'Authorization': accessToken } })
      .then((res) => res.json())
      .then((profileData) => {
        setUserProfile(profileData)
        setIsLoading(false)
        console.log(profileData)
      })
  }

  useEffect(() => {
    fetchUserProfile()
    /*     
    
    fetchDataWithHeaders(profileUrl, headerOptions)
          .then((profileData) => {
            setUserProfile(profileData)
            setIsLoading(false)
            console.log(profileData)
          }) */
  }, [])

  return (
    <>
      {userProfile && (
        <>
          <div className="user-profile-wrapper">
            <div className="image-container">
              <img className="userlogo" src={userlogo} alt="User Logo" />
            </div>
            <section className="profile-box">
              <h2>{`Hi ${userProfile.name}!`}</h2>
              <p>{userProfile.email}</p>
            </section>
          </div>
          <section className="my-ads">
            <h2 className="ad-listing-header">My ads</h2>

            <CardList className="ad-listing">
              <Card className="ad-card">
                <Heading level="3" className="ad-title">
                  <CardLink to={`/adverts/ad`}>Title</CardLink>
                </Heading>
                <Text className="price-tag">000 SEK</Text>
              </Card>
            </CardList>
          </section>
        </>
      )}
    </>
  )
}