import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  // TODO only add devtools extension when NODE_ENV === 'development'
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
