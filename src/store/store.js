import { createStore } from 'redux';

import { devToolsEnhancer  } from 'redux-devtools-extension';

import rootReducer from './reducers/index.reducer';

export default createStore(rootReducer, devToolsEnhancer());
