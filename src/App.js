import { useState } from 'react';
import './App.css';

function App() {
  console.log('앱 실행됨.');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '이순신' },
  ];

  // 레퍼런스 변경되야 동작함!!
  const [users, setUsers] = useState(sample);

  const download = () => {
    const a = sample.concat({ id: num, name: '관창' });
    setUsers(a);
    setNum(num + 1);
  };
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
