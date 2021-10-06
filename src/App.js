import { useState } from 'react';
import './App.css';

function App() {
  //다운로드 받음
  const [users, setUsers] = useState([]);

  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '임꺽정' },
      { id: 3, name: '장보고' },
      { id: 4, name: '이순신' },
    ];
    setUsers([...users, ...sample]);
  };
  return (
    <div>
      <button onClick={download}>다운로드</button>
    </div>
  );
}

export default App;
