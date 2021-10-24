import React from 'react';

// Function 방식
const Home = (props) => {
  const boards = props.boards;
  console.log(boards);
  return (
    <div>
      <h1>홈페이지 입니다.</h1>
    </div>
  );
};

export default Home;
