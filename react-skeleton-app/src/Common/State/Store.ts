import createSagaMiddleware from "redux-saga";
import { createRootReducer } from "./RootReducer";
import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IRootState } from "./IRouteState";

export const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer();

const storeConfiguration = (initialState: any): any => {
  // create store with redux dev-tools integration
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  // hot reloading
  if (module.hot) {
    module.hot.accept("./RootReducer", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return {
    store: store as Store<IRootState, AnyAction>
  };
};

const initialState = {
  testReducer: "It is working"
};

const appStore = storeConfiguration(initialState);

export default appStore;
