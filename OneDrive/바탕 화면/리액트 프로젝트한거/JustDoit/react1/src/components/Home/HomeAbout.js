import React from "react";
import styled from "styled-components"; // <== 오타 수정하였습니다.
import { useState, useEffect } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

const QuestionContainer = styled.div`
  background-color: red;
  cursor: pointer;
`;

const AnswerContainer = styled.div`
  background-color: red;
  display: ${props => props.open ? 'block' : 'none'};
`;

const HomeAbout = React.forwardRef((props, ref) => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const Answerandquestions = [
    {
      id: 1,
      questions: '당신의 직업은?',
      answer: '백수'
    },
    {
      id: 2,
      questions: '당신의 직업은?',
      answer: '백수'
    }
  ];

  return (
    <Div ref={ref} id="소개">
      <div style={{ marginTop: "20%" }}>
        {Answerandquestions.map(total => (
          <div key={total.id} style={{ marginTop: "1%" }}>
            <QuestionContainer onClick={() => setOpenQuestionId(openQuestionId !== total.id ? total.id : null)}>
              {total.questions}
            </QuestionContainer>
            <AnswerContainer open={openQuestionId === total.id}>
                {/*id를 각각 부여해서 이제 질문마다 열리도록 한다. */}
              {total.answer}
            </AnswerContainer>
          </div>
        ))}
      </div>
    </Div>
  );
});










  
/*React 컴포넌트는 기본적으로 ref를 받지 않습니다. 즉, 컴포넌트에 직접 ref를 할당하려고 하면 오류가 발생하거나 제대로 작동하지 않을 수 있습니다.
그럼에도 불구하고, 우리가 만든 커스텀 컴포넌트에 ref를 전달하고 싶을 때 React.forwardRef를 사용합니다. forwardRef는 부모 컴포넌트로부터 전달받은 ref를 하위 DOM 요소나 다른 컴포넌트에게 전달할 수 있게 해줍니다.
 */


/*
props는 "properties"의 줄임말로 React 컴포넌트가 받을 수 있는 매개변수입니다.
React에서 컴포넌트는 재사용 가능한 코드 조각을 나타냅니다. 여러 다른 데이터로 동일한 컴포넌트를 여러 번 렌더링하고 싶을 때, 그 데이터를 props를 통해 전달합니다.
위의 코드에서는 props를 사용하고 있지 않기 때문에 실제로 필요 없습니다. 그러나 forwardRef의 구조상 첫 번째 매개변수로서 명시적으로 선언됩니다.
*/
/*

ref는 React에서 DOM 요소에 직접 접근할 때 사용하는 매커니즘입니다.
상태(state)나 props 변경을 통해서 리렌더링을 통해 UI를 업데이트하는 것이 React의 기본적인 동작 방식이지만, 경우에 따라 DOM 요소에 직접적으로 접근해야 할 때가 있습니다. 예를 들어, 특정 DOM 요소의 크기나 위치를 얻거나, 입력 필드에 포커스를 주는 것과 같은 작업들입니다.
위의 코드에서는 HomeAbout 컴포넌트의 DOM 요소 (여기서는 Div)에 접근할 수 있게 ref를 전달하고 있습니다.
*/
export default HomeAbout;