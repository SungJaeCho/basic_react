import { useState } from 'react';
import './App.css';

// 0.React엔진 - 데이터 변경 감지해서 UI그려줌
// 1.실행 방식 (index.html) SPA 절대 깜박거리지 않음(a태그 같은거 못씀)
// 2.JSX 문법
// 2-1 리액트는 하나의 Dom만 리턴이 가능하다. <div>내용</div><h1>하이</h1>불가 -> <div>내용<h1>하이</h1></div> 가능
// 2-2 변수선언은 반드시 let or const로만 해야함
// 2-3 if사용 불가능 -> 삼항연산자 가능
// 2-4 조건부 렌더링 (조건 && 값(true)) false값은 표시안됨
// 2-5 변수선언만 했을시 기본값은 null이 아닌 undefined임 (정의되지않음)
// 2-6 css디자인
// 2-6-1 내부에 적는 방법 (추천x)
// 2-6-2 외부 파일에 적는 방법
// 2-6-3 라이브러리 사용(부트스트랩, componet-styled)
// 콤포넌화시 반드시 깊은 복사를 이용 하자

function App() {
  // let list = [1, 2, 3];

  // let number = 1; // 상태값 아님
  const [number, setNumber] = useState(1); // React 안에 hooks라이브러리

  const add = () => {
    // number++;
    setNumber(number + 1); //리액트한테 number값 변경할께 라고 요청
    console.log(number);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
    </div>
  );
}

export default App;
