import React from 'react';
import { AppContainer } from 'assets/style/App.style';
import RouteModule from 'Routes';
import Nav from 'views/components/common/Nav';
import { reissue } from 'utils/reissue';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSelectorTyped from 'utils/useSelectorTyped';
import LoadingPage from 'views/pages/LoadingPage';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelectorTyped((state) => state.user.loginStatus);
  const [isPending, setIsPending] = React.useState(true);
  React.useEffect(() => {
    void reissue(dispatch, navigate, setIsPending);
  }, []);

  return (
    <div className="App">
      <AppContainer>
        {isPending
          ? (
          <LoadingPage />
            )
          : (
          <>
            <RouteModule />
            <Nav isLoggedIn={isLoggedIn} />
          </>
            )}
      </AppContainer>
    </div>
  );
};

export default App;
