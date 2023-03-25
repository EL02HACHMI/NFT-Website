import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    background-color: beige;
    position: fixed;
    top: 0;
    width: 100%;
`

const Left =styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

`
const Logo =styled.div`
    font-size: 40px;
    font-weight: bold;
`
const Center =styled.div`
    flex: 1;
    display: flex;


`

const Item =styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style-type: none;
`
const ItemLink =styled.li`
    font-weight: 300;
    position: relative;
    cursor: pointer;
    &::after{
        content: ' ';
        transition: width 0.2s ease;
        background-color: black;
        width: 0%;
        display: block;
        position: absolute;
        height: 2px;
    }
    &:hover::after{
        width: 100%;
    }
`
const Right =styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    `
const Button =styled.div`
    outline: none;
    border: none;
    background-color: black;
    color: white;
    padding: 10px 15px;
    border-radius: 50px;
    position: relative;
    &:hover{
        transition: all 0.3s ease;
        transform: scale(0.9);
    }
    &::after{
        content: ' ';
        /* background-color: red; */
        width: 0%;
        height: 2px;
        position: absolute;
        padding: 20px 0px;
        display: none;
        top: 50%;
        left: 50%;
        border-radius: 50px;
        border: 2px solid black;
        transform: translate(-50%,-50%) scale(1.1);
    }
    &:hover::after{
        width: 100%;
        display: block;

    }
`



const Navbar = () => {
  return (
    <Container>
        <Left>
            <Logo>Frekes</Logo>
        </Left>
        <Center>
            <Item>
                <ItemLink>Home</ItemLink>
                <ItemLink>About</ItemLink>
                <ItemLink>Services</ItemLink>
                <ItemLink>Contact</ItemLink>
            </Item>
        </Center>
        <Right>
            <Button>Sign up</Button>
        </Right>
    </Container>
  )
}

export default Navbar