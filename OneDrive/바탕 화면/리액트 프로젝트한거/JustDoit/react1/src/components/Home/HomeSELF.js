import React from "react";
import { styled } from "styled-components";
import { useState,useEffect } from "react";

const Div=styled.div`
display: flex;
flex-direction: column;
width:100%;
height:100vh;
background-color: brown;
overflow-y: auto;
`
const Homeself=React.forwardRef((props, ref) => {
    return <Div ref={ref} id="자소서"></Div>;
  });

export default Homeself;