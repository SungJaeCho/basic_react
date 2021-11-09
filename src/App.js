// 글쓰기, 글삭제, 글목록보기

import { Route } from 'react-router';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Route path="/" eact={true} component={ListPage} />
      <Route path="/write" eact={true} component={WritePage} />
    </div>
  );
}

export default App;
