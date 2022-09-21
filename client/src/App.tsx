import React from 'react';
import GlobalStyle from 'assets/style/GlobalStyle';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import MainNoCactus from './views/pages/MainNoCactus';
import MainCactus from './views/pages/MainCactus';
import Intro from 'views/pages/Intro';
import Login from 'views/pages/Login';
import Mypage from 'views/pages/Mypage';
import Signup from 'views/pages/Signup';
import Nav from 'views/components/common/Nav';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 800px;
  margin: auto;
  position: relative;
`;

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Div>
          <Routes>
            <Route
              path='/'
              element={<Intro />}
            />
            <Route
              path='/main'
              element={<MainNoCactus />}
            />
            <Route
              path='/main2'
              element={<MainCactus />}
            />
            <Route
              path='/mypage/*'
              element={<Mypage />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/signup'
              element={<Signup />}
            />
          </Routes>
          <Nav/>
        </Div>
      </BrowserRouter>
    </div>
  );
};

export default App;
