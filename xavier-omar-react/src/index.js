import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { createStoreHook, Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Success from './components/Success';
import MusicList from './components/MusicList';
import VideoList from './components/VideoList';
import Merch from './components/Merch';
import reducer from './store/reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/music" component={MusicList} />
            <Route exact path="/videos" component={VideoList} />
            <Route exact path="/merch" component={Merch} />
            <Route exact path="/success" component={Success} />
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
