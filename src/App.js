import styled from 'styled-components';
import './App.css';

// document.createElement("h1") 태그와 똑같음.
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <div>안녕</div>
      <div>헬로우</div>
    </div>
  );
}

export default App;
