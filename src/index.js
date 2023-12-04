import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import App from './App';
import PageWrapper from './components/pageWrapper/PageWrapper';
import store from './slices/index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageWrapper>
        <App />
      </PageWrapper>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
