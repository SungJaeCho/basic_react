import logo from './logo.svg';
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

let a = 10;
const b = 20;

function App() {
  let c;
  console.log(c);

  // 2-6-1 방법
  const myStyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={myStyle}>
        Hi React {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">해딩태크 {b === 20 && '20입니다.'} </h1>
      <hr />
    </div>
  );
}

export default App;
