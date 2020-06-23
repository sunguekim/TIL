import React from 'react';
import {Router, Route} from 'react-router-dom';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import WritePage from './pages/WriterPage'
import RegisterPage from './pages/Register';


const App=()=>{
  return(
    <>
  <Route component={PostListPage} path={['/@:username','/']} exact/>
  <Route component={LoginPage} path="/login"/>
  <Route component={RegisterPage} path="/register"/>
  <Route component={WritePage} path="/write"/>
  <Route component={PostPage} path="/@:username/:postId"/>
    </>
  )
}

export default App;
