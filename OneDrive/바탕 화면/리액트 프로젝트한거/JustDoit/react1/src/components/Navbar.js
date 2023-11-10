import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 10%;
  background-color: purple;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const Contents = styled.div`
  flex-grow: 1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: red;
  }
`;

const HI = styled.div`
  width: 20%;
  background-color: blue;
`;

const Navbar = ({ activeSection }) => {
  const content = ["소개", "자소서", "이름", "활동"];

  const handleScrollTo = (section) => {
    const offsetTop = document.getElementById(section).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Nav>
      <HI></HI>
      {content.map((item) => (
        <Contents
          key={item}
          className={activeSection === item ? "active" : ""}
          onClick={() => handleScrollTo(item)}
        >
          {item}
        </Contents>
      ))}
    </Nav>
  );
};

export default Navbar;

