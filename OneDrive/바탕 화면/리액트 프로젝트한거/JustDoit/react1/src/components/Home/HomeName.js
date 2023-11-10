import React from "react";
import { styled } from "styled-components";
import { useState,useEffect } from "react";

const Div=styled.div`
display: flex;
flex-direction: column;
width:100%;
height:100vh;
background-color: yellow;
overflow-y: auto;
`
const HomeName=React.forwardRef((props, ref) => {
    return <Div ref={ref} id="이름"></Div>;
  });

export default HomeName;