import React from "react"
import { Link } from "react-router-dom"
import * as layouts from "."
import * as system from "styled-system"
import styled from "@emotion/styled"
import { ContainerProps } from "./style"
import hph from "../assets/hph.jpg"
import * as buttons from "./buttons"
const ToolContainer = styled.div<ContainerProps>`
    width: 100%;
    background-color:green;
    padding:0px;
    margin:0;
    opacity:.8;
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.color}
`
const Buttons = styled(Link) <ContainerProps>`
    text-decoration:none;
    color:white;
    width:10vh;
    padding:25px;
    text-align:center;
    border:none;
    // background-position:center;
    font-weight:bold;
    &:hover{
        color:white;
        border-radius:15px;
    }
    ${system.space}
    ${system.width}
    ${system.layout}
    ${system.background}
`
// const DropDownButton = styled.select<ContainerProps>`
//     width:auto;
//     color:transparent;
//     text-align:center;

//     border:none;
//     font-weight:800;
//     background-image:linear-gradient(to bottom right,orange,purple,blue);
//     background-size:200% 200%;
//     background-clip:text;
//     &:hover{
//         background-clip:padding-box;
//         color:white;
//         border-radius:15px;
//     }
//     ${system.space}
//     ${system.width}
//     ${system.layout}
// `
// const DropDownOption = styled.option<ContainerProps>`
//     text-decoration:none;
//     background-image:linear-gradient(to bottom right,orange,purple,blue);

//     width:10vh;
//     text-align:center;
//     border:none;
//     font-weight:bold;
//     &:hover{
//         background-image:linear-gradient(to bottom right,orange,purple,blue);
//         color:white;
//         border-radius:15px;
//     }
//     ${system.space}
//     ${system.width}
//     ${system.layout}
// `
const ColorBack = styled.div`
    // background-image:linear-gradient(to bottom right,orange,purple,blue);
    // background-size:200% 200%;
    background-clip:text;
    position:relative;
    background-position:middle;
    height:auto;
    // padding:5px;
    &:hover{
        // background-clip:padding-box;
        color:white;
        border:2px solid white
        // border-radius:15px;
    }
`
const Logo = styled.img`
    padding:0px;
    height: 20vh;
    position:absolute;
    overflow: hidden;
    top:-4vh;
`
function toolbar(props: { isMobile?: boolean }) {
    if (props.isMobile) {
        return (<ToolContainer mr="auto" ml="auto" height="10vh">
            <layouts.flex width="10vw"> <Logo src={hph} /></layouts.flex>
            <layouts.flex ml="50vw" mt="20px"><buttons.primary>Call Us Today</buttons.primary></layouts.flex>
        </ToolContainer>)
    }
    return (<>
        {/* <layouts.DIV backgroundColor="blue">He</layouts.DIV> */}
        <ToolContainer mr="auto" ml="auto" height="10vh" pt="5px">
            <layouts.flex >
                <Logo src={hph} ></Logo>
            </layouts.flex>
            <layouts.flex ml="15vw" mt="3vh">

                <ColorBack >
                    <Buttons height="100%" to="/" >Home</Buttons>
                </ColorBack>
                <ColorBack>
                    <Buttons to="/services">Services</Buttons>
                </ColorBack>
                <ColorBack>
                    <Buttons to="/gallary">Gallary</Buttons>
                </ColorBack>
                <ColorBack>
                    <Buttons to="/aboutUs">About Us</Buttons>
                </ColorBack>
                {/* <ColorBack>
                    <Buttons to="/resume">Contact Us</Buttons>
                </ColorBack> */}
                {/* <ColorBack>
                    <Buttons to="/themes">Themes</Buttons>
                </ColorBack> */}
                {/* <DropDownButton p="5px">
                    <DropDownOption value="fruit">Default Theme</DropDownOption>
                    <DropDownOption value="vegetable">Trippy Moon</DropDownOption>
                    <DropDownOption value="meat">Meat</DropDownOption>
                </DropDownButton> */}

            </layouts.flex>
        </ToolContainer>
    </>
    )
}
export default toolbar