import React from 'react';
import './App.css';
import GlobalStyle from 'assets/style/GlobalStyle';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
// import MainNoCactus from './views/pages/MainNoCactus';
// import MainCactus from './views/pages/MainCactus';

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
            {/* <Route
              path='/main'
              element={<MainNoCactus />}
            />
            <Route
              path='/main2'
              element={<MainCactus />}
            /> */}
            <Route />
          </Routes>
        </Div>
      </BrowserRouter>
    </div>
  );
};

export default App;
