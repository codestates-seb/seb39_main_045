import React from 'react';
import GlobalStyle from 'assets/style/GlobalStyle';
import { AppContainer } from 'assets/style/App.style';
import { BrowserRouter } from 'react-router-dom';
import RouteModule from 'Routes';
import Nav from 'views/components/common/Nav';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <AppContainer>
          <RouteModule />
          <Nav />
        </AppContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
