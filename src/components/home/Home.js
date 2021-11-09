import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;
// 스타일 상속
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;

// Function 방식
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, user } = props;
  console.log(user);

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title}
          내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
