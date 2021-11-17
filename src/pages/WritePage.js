import React from 'react';
// 안씀

const WritePage = () => {
  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목" />
        <button type="button">글쓰기</button>
      </form>
    </div>
  );
};

export default WritePage;
