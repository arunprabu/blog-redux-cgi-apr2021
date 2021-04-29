import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1: We have to create store first - Setup the the Redux Store app-wide
import { createStore } from 'redux';
// Step 5:  Setup reducer for the store
import rootReducer from './reducers'; // and pass this to createStore as an argument.
// Step 6: inside the ReactDOM.render() block,
// Provide the store data to the entire app 
import { Provider } from 'react-redux'; 
// Definition: The Provider component uses something 
//called as React Context which allows you to pass the 
//store object to any components 
//that needs to access it without the need to pass props.
//Provider should be imported from react-redux 

// Step 2:
const store = createStore(rootReducer); //this needs a special argument called 'reducer' 

ReactDOM.render(
  <React.StrictMode>
     {/* this is how we have to provide store data to the app --> */}
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
