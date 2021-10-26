import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

const HomePage = () => {
  // http요청 (jquery ajax(안씀), fetch, axios(다운로드해야함))
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // 다운로드를 받았다고 가정 = fetch(), axios(), ajax() 비동기로 실행되므로
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    // 빈데이터가 들어가고 data받고 다시 그려짐 (그래서 반드시 useState상태 데이터이여야함)
    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []); //빈배열이면 한번만 실행됨

  return (
    <div>
      <Header />
      <Home boards={boards} setBoards={setBoards} user={user} />
      <Footer />
    </div>
  );
};

export default HomePage;
