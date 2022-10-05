import React from 'react';
import { AppContainer } from 'assets/style/App.style';
import RouteModule from 'Routes';
import Nav from 'views/components/common/Nav';
import { reissue } from 'utils/reissue';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    void reissue(dispatch, navigate);
  }, []);
  return (
    <div className="App">
      <AppContainer>
        <RouteModule />
        <Nav />
      </AppContainer>
    </div>
  );
};

export default App;
