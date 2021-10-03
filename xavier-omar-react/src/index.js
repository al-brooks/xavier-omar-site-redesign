import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';

import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Success from './components/Success';
import MusicList from './components/MusicList';
import VideoList from './components/VideoList';
import Merch from './components/Merch';
import EmailSuccess from './components/EmailSuccess';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/merch" component={Merch} />
            <Route exact path="/music" component={MusicList} />
            <Route exact path="/videos" component={VideoList} />
            <Route exact path="/payment/success" component={Success} />
            <Route exact path="/email/success" component={EmailSuccess} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
