import React from 'react';
import { AppContainer } from 'assets/style/App.style';
import RouteModule from 'Routes';
import Nav from 'views/components/common/Nav';
import { reissue } from 'utils/reissue';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSelectorTyped from 'utils/useSelectorTyped';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelectorTyped((state) => state.user.loginStatus);

  React.useEffect(() => {
    void reissue(dispatch, navigate);
  }, []);

  return (
    <div className="App">
      <AppContainer>
        <RouteModule />
        <Nav isLoggedIn={isLoggedIn} />
      </AppContainer>
    </div>
  );
};

export default App;
