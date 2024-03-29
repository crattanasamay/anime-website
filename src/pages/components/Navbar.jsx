import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    @media (max-width:450px){
        flex-direction: column;
        align-items: flex-start;
    }

`

const NavContainer = styled.div`

    height:100%;

    @media (max-width:450px){
        width: 100%;
    }
   
`
const NavItem = styled.li`
    font-size: 1.6rem;
    list-style: none;
    padding: .5rem;
    cursor: pointer;
    height:100%;
    border-radius: 1rem;
    color: white;
    &:hover{
        background-color: #2F5C8F;
    }

    @media (max-width:450px){
        text-align: center;
        padding: .2rem;
        border-radius: 0rem;
        
    }


`

const NavbarLink = styled(Link)`
    color: white;
    font-size: 1.6rem;
    padding: .5rem;
    text-decoration: none;
`


const LogoName = styled.h1`
    font-weight: bold;
    margin: 1rem;
    color:white;
`

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    text-decoration: none;

    @media(max-width:450px){
        flex-direction: column;
        width:100%;
        display:none;
    }

  
`

const HamburgerButton = styled.a`

    position: absolute;
    top: .5rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 3rem;
    height: 3rem;

    @media(max-width:450px){
        display:flex;
    }
  
`

const HamburgerBar = styled.span`
    height: .5rem;
    width: 100%;
    background-color: white;
    border-radius: .7rem;
`





export default function Navbar() {
    const [isShown,setShow] = useState(true); // Show Navbar

    
    const [width,setWidth] = useState({
        dynamicWidth: window.innerWidth
    });

    
    const setRef = () =>{
        setWidth({
            dynamicWidth: window.innerWidth
        })
    }
    
    useEffect(() =>{
        window.addEventListener('resize',setRef);
        // if the width of the window goes above 450px make sure Navbar shows
        console.log(width.dynamicWidth)
        if(width.dynamicWidth > 450){
            setShow(true)
        }
        return(() =>{
            window.removeEventListener('resize',setRef);
        })
    },[width]);

    function showNav(){


        if (width > 450){
            setShow(true)
        }else{
            setShow(current => !current)
        }
        //console.log(isShown)


    }
   
    
    return (
        <Container>
            <LogoName>Anime</LogoName>
                <HamburgerButton onClick = {() => showNav() }>
                    <HamburgerBar/>
                    <HamburgerBar/>
                    <HamburgerBar/>
                </HamburgerButton>
                <NavContainer>
                
                        <NavList style={{display: isShown? 'flex':'none'}}>
                            
                            <NavItem><NavbarLink to="/">Home</NavbarLink></NavItem>
                            
                       
                        </NavList>
                  
                 
                    
            </NavContainer>
        </Container>
    )
}


