import Typewriter from 'typewriter-effect';
import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
    font-size: 40px;
    color: red;
    font-weight: 700;
    text-transform: Uppercase;
    font-family: sans-serif;
    @media screen and (max-width: 1246px){
    font-size: 30px;
  }
  @media screen and (max-width: 1000px){
    font-size: 20px;
  }
`

const Title=()=>{
return (

    <Container>
        <Typewriter
  options={{
    strings: ['NFTs.', 'Collectible items.','Ape Killers!'],
    autoStart: true,
    loop: true,
  }}
/>
    </Container>
)
}

export default Title