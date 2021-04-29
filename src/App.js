import './App.css';
import { Route } from 'react-router';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Route component={PostListPage} path={['./@:username', '/']} exact></Route>
      <Route component={LoginPage} path="/login" exact></Route>
      <Route component={RegisterPage} path="/register" exact></Route>
      <Route component={WritePage} path="/write" exact></Route>
      <Route component={PostPage} path="/@username/:postId" exact></Route>
    </>
  );
}

export default App;
