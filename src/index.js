
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { store, persistor } from './redux/store.js';

import './index.css';
import App from './App';

ReactDOM.render(
		<Provider store={store}>
	    <BrowserRouter>
	    	<PersistGate persistor={persistor}>
	    		<App />
	    	</PersistGate>
	    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);




















/*

TechSith redux tutorial code

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxApp from './reduxApp';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><ReduxApp /></Provider>, document.getElementById('root'));

*/


