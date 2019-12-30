/**
 * Main JS File
 * @author Akshay
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const reactRouterMiddleware = routerMiddleware(history);

const composeEnhancers =
	(process.env.NODE_ENV === "development" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(reactRouterMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<App store={store} history={history} />,
	document.getElementById("root")
);
registerServiceWorker();
