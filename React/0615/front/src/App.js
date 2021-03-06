import React from 'react';
import {Route} from 'react-router-dom';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WriterPage'
import RegisterPage from './pages/Register';
import AdminPage from './pages/AdminPage'

const App=()=>{
  return(
    <>
  <Route component={PostListPage} path={['/@:username','/']} exact/>
  <Route component={LoginPage} path="/login"/>
  <Route component={RegisterPage} path="/register"/>
  <Route component={WritePage} path="/write"/>
  <Route component={PostPage} path="/@:username/:postId"/>
  <Route component={AdminPage} path="/admin"/>
    </>
  )
}

export default App;
