import React, { useState,useEffect,useRef} from "react";
import Modal from "react-modal";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled, { keyframes ,css} from "styled-components";

import longcutton from "../../Assets/Img/longcutton.png";
import shortcutton from "../../Assets/Img/shortcutton.png";
import myface from "../../Assets/Img/여권 온라인용.jpg";

const Information = [
  {
    id: 1,
    img: longcutton,
    name: 'Pard Website',
    Activityname: "Pardwebsite에서 이런 부분을 맡아서 진행하였다.",
    video: 44,
  },
  {
    id: 2,
    img: shortcutton,
    name: 'Shortcutton',
    Activityname: "23herz라는 팀에서 걱정먹는 깜장이를 제작하였다.",
    video: 44,
  },
  {
    id: 3,
    img: longcutton,
    name: 'ss',
    Activityname: "23herz라는 팀에서 걱정먹는 깜장이를 제작하였다.",
    video: 44,
  },
  {
    id: 4,
    img: longcutton,
    name: 'as',
    Activityname: "23herz라는 팀에서 걱정먹는 깜장이를 제작하였다.",
    video: 44,
  },
  {
    id: 5,
    img: shortcutton,
    name: 'Shortcutton',
    Activityname: "23herz라는 팀에서 걱정먹는 깜장이를 제작하였다.",
    video: 44,
  },

];
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden; // 가로 스크롤 제거
`;
const ImageAnimation = keyframes`
  0% {
    transform: translateX(0); // 시작 위치를 첫 번째 이미지 세트로 설정
  }
  100% {
    transform: translateX(-${100 / 3}%); // 두 번째 이미지 세트의 마지막으로 이동
  }
`;

/*
우리가 3개의 이미지 세트를 가지고 있습니다: 원래 이미지 세트, 그 복사본, 그리고 마지막 이미지를 위한 세 번째 세트. 이 때 각 이미지 세트는 전체 너비의 1/3을 차지합니다. 따라서, 한 세트의 너비는 100% / 3 또는 약 33.33% 입니다.

따라서:

transform: translateX(0); 는 첫 번째 이미지 세트의 시작을 나타냅니다.
transform: translateX(-${100 / 3}%); 는 첫 번째 이미지 세트가 완전히 왼쪽으로 이동한 후, 두 번째 이미지 세트의 시작을 나타냅니다.
transform: translateX(-${2 * (100 / 3)}%); 는 두 번째 이미지 세트가 완전히 왼쪽으로 이동한 후, 세 번째 이미지 세트의 시작을 나타냅니다.
만약 무한 슬라이드 애니메이션을 원한다면, 첫 번째 이미지 세트가 완전히 왼쪽으로 이동한 후 바로 두 번째 이미지 세트가 나타나게 하려면 transform: translateX(-${100 / 3}%); 을 사용하면 됩니다. 이것이 첫 번째 이미지 세트가 끝나고 두 번째 이미지 세트의 시작을 나타내는 것입니다.
*/

const ImageWrapper = styled.div`
  display: flex;
  width: 200%;  // 이미지가 2배이므로 200%로 설정
  height: 200px;
  animation: ${ImageAnimation} 8s infinite linear; // 회전속도
  will-change: transform;
`;



const ImageContainer = styled.img`
    width: 300px; 
    margin-right: 30px;  
    height: 200px;  
    overflow: hidden;
    cursor: pointer;

    ::after {
        content: '';
        position: absolute;
        inset: 0 auto auto 0;
        width: 100%;
        height: 100%;
        background: ${props => `url(${props.src}) no-repeat center center / cover`}; 
    }
`;




Modal.setAppElement("#root");

const HomeActivity = React.forwardRef((props, ref) => {
  const [animationOffset, setAnimationOffset] = useState("0%");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);
  const imageWrapperRef = useRef(null);



  useEffect(() => {
    const wrapper = imageWrapperRef.current;

    const resetAnimation = () => {
      // 애니메이션의 한 사이클이 끝났을 때 호출되는 함수
      wrapper.style.animationPlayState = 'paused';
      wrapper.style.transform = `translateX(0)`; // 첫 번째 이미지 세트의 시작으로 이동
      setTimeout(() => {
        wrapper.style.animationPlayState = 'running';
      }, 10);  // 약간의 딜레이를 추가하여 끊김 느낌을 줄입니다.
    };

    wrapper.addEventListener('animationiteration', resetAnimation);
    /*animationiteration 이벤트는 CSS 애니메이션이 한 사이클을 완료할 때마다 발생합니다. 여기서는 애니메이션 한 사이클이 끝날 때마다 
    resetAnimation 함수를 호출하도록 이벤트 리스너를 추가하고 있습니다. */

    return () => {
      wrapper.removeEventListener('animationiteration', resetAnimation);
      /*useEffect에서 함수를 반환하면, 해당 함수는 컴포넌트가 언마운트될 때 또는 다음 useEffect 실행 전에 호출됩니다. 이 경우, 
      이벤트 리스너를 제거하는 로직을 추가하여, 컴포넌트가 사라질 때 메모리 누수를 방지합니다. */
    };
}, []);

  
/*
  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    const resetAnimation = () => {
      // 애니메이션 종료 시 시작 위치로 즉시 이동
      wrapper.style.animationPlayState = 'paused';
      wrapper.style.transform = 'translateX(0)';
      // 애니메이션 재시작
      setTimeout(() => {
        wrapper.style.animationPlayState = 'running';
      }, 0);
    };
    
    wrapper.addEventListener('animationiteration', resetAnimation);
    
    return () => {
      wrapper.removeEventListener('animationiteration', resetAnimation);
    };
  }, []);
*/

  /*
useEffect(() => {
  const wrapper = imageWrapperRef.current;
  
  const resetAnimation = () => {
    setAnimationOffset(prev => `calc(${prev} + 33.33%)`);
  };
  
  wrapper.addEventListener('animationiteration', resetAnimation);
  
  return () => {
    wrapper.removeEventListener('animationiteration', resetAnimation);
  };
}, []);

*/

  const openModal = (activity) => {
    setCurrentActivity(activity);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentActivity(null);
    setModalIsOpen(false);
  };



  return (
    <Div ref={ref} id="활동">
{/*
<ImageWrapper ref={imageWrapperRef} imageCount={Information.length}> 
            {Information.map(content => (
                <ImageContainer key={content.id} src={content.img} onClick={() => openModal(content)} />
            ))}
            {Information.map(content => (
                <ImageContainer key={content.id + 'copy1'} src={content.img} onClick={() => openModal(content)} />
            ))}
            {Information.map(content => (
                <ImageContainer key={content.id + 'copy2'} src={content.img} onClick={() => openModal(content)} />
            ))}
            <ImageContainer key={Information[0].id + 'copy3'} src={Information[0].img} onClick={() => openModal(Information[0])} />
        </ImageWrapper>



            */}
<ImageWrapper ref={imageWrapperRef}> 
    {Information.map(content => (
        <ImageContainer key={content.id} src={content.img} onClick={() => openModal(content)} />
    ))}
    {Information.map(content => (
        <ImageContainer key={content.id + 'copy'} src={content.img} onClick={() => openModal(content)} />
    ))}
    {Information.map(content => (
        <ImageContainer key={content.id + 'tail'} src={content.img} onClick={() => openModal(content)} />
    ))}
</ImageWrapper>




<div style={{marginTop:"20%"}}>
      {Information.map(content => (
        <div key={content.id}>


          <div  onClick={() => openModal(content)}>
          {content.name}
          </div>

        </div>
      ))}
</div>

<Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)",
                      },
                      content: {
                        color: "black",
                        background: `white`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        margin: "0 auto",
                        width: "60%",
                        height: "70%",
                        display: "flex",
                        border: "none",
                        alignItems: "center",
                        overflowY: "hidden",
                        borderRadius: "13px",
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",

                        //position: 'absolute', // absolute positioning
                        left: "50%", // center the modal horizontally
                        top: "53%", // center the modal vertically
                        transform: "translate(-50%, -50%)", // center the modal
                        //모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을 담당합니다.

                        // 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                      },
                    }}
                  >
   
          {currentActivity && (
            <>
              <h2>{currentActivity.name}</h2>
              <p>{currentActivity.Activityname}</p>
              {/* 여기에 이미지와 비디오 등의 추가적인 내용을 표시할 수 있습니다. */}
            </>
          )}
          
          <button onClick={closeModal}>Close</button>

      </Modal>
    </Div>
  );
});

export default HomeActivity;