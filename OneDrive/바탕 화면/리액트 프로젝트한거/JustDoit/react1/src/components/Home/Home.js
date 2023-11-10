import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar";
import HomeAbout from "./HomeAbout";
import Homeself from "./HomeSELF";
import HomeName from "./HomeName";
import HomeActivity from "./HomeActivity";
import styled from "styled-components";

const Allhome = styled.div``;

const Home = () => {
  const aboutRef = useRef(null);
  const selfRef = useRef(null);
  const nameRef = useRef(null);
  const activityRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const aboutPos = aboutRef.current.offsetTop;
      // 페이지의 최상단부터 해당 섹션의 상단까지의 거리의 픽셀 값
      const selfPos = selfRef.current.offsetTop;
      const namePos = nameRef.current.offsetTop;
      const activityPos = activityRef.current.offsetTop;
      const currentPos = window.scrollY + window.innerHeight / 2;
/*이 줄은 현재 화면 중앙의 위치를 계산합니다.
window.scrollY는 현재 스크롤된 위치를 가져오는 값입니다. 예를 들어, 페이지의 최상단이면 이 값은 0이며, 아래로 스크롤 할수록 값이 커집니다.
window.innerHeight는 브라우저 창의 높이를 가져옵니다.
window.scrollY + window.innerHeight / 2로 현재 화면의 중앙 위치를 계산할 수 있습니다.
이렇게 계산된 값들을 이용해서 스크롤이 어느 섹션에 위치하고 있는지 판별합니다. 만약 currentPos가 selfPos보다는 크지만 namePos보다는 작다면, 화면 중앙에는 Homeself 섹션이 위치하고 있는 것으로 판단할 수 있습니다. */
      
if (currentPos < selfPos) {
        setActiveSection("소개");
      } else if (currentPos < namePos) {
        setActiveSection("자소서");
      } else if (currentPos < activityPos) {
        setActiveSection("이름");
      } else {
        setActiveSection("활동");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Allhome>
      <Navbar activeSection={activeSection} />
      <HomeAbout ref={aboutRef} />
      <Homeself ref={selfRef} />
      <HomeName ref={nameRef} />
      <HomeActivity ref={activityRef} />
    </Allhome>
  );
};

export default Home;
