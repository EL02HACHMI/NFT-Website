import React from 'react'
import styled from 'styled-components'
// import  GIF from '../assets/Home_GIF.gif'
import Title from './Title'

const Container=styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`
const Right=styled.div`
  flex: 1;
  display:flex;
  justify-content:center;
  `

const Image=styled.img`
  width: 60%;
  position: relative;
  @media screen and (max-width: 1000px){
  width: 40%;
  position: absolute;
  top: 10%;
  z-index: -2;
  margin: 0;
  }
  
  `

const Left=styled.div`
  flex: 1;
  width: 90%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  text-align: center;
`
const Tit=styled.h2`
  font-size: 50px;
  padding: 0px 10%;
  font-family: sans-serif;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  @media screen and (max-width: 1246px){
    font-size: 40px;
  }
  @media screen and (max-width: 1000px){
    font-size: 30px;
  }
`

const Desc=styled.h4`
  color: #2c2c2c;
  font-weight: 500;
  letter-spacing: 2px;
  @media screen and (max-width: 1246px){
    font-size: 15px;
  }
  @media screen and (max-width: 1000px){
    font-size: 10px;
  }
`


const Home = () => {
  return (
    <Container>
      
      <Right>
          <Image src={require('../assets/Home_GIF.gif')} alt="loading..." />
      </Right>

      <Left>
        <Tit>Discover A New Era Of Cool</Tit>
        <Title/>
        <Desc>Bored of Apes? Try Someting New.</Desc>
      </Left>

    </Container>
  )
}

export default Home