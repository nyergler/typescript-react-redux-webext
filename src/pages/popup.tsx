/// <reference path="../modules/redux-webext.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createUIStore } from 'redux-webext';
import ActiveTabPopup from '../components/activeTab';
// import './index.css';


async function initApp() {
  const store = await createUIStore();

  ReactDOM.render(
    <Provider store={store}>
      <ActiveTabPopup />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
}

initApp();