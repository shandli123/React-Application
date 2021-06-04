import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'

//from github profile for redux dev tool https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,document.querySelector('#root')
); 
 


// client id for js browser
// 657538054847-nlmese7ni3ig06p5frn8jifeug3a6q96.apps.googleusercontent.com
// client  secret used for server flow
// hyo3TPpKSn8jngXIpUdp - RbX