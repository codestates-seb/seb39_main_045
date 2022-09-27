import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

window.Kakao.init(process.env.REACT_APP_KAKAO_JS);
window.Kakao.isInitialized();
