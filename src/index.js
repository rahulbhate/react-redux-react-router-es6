import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';


const store = configureStore();
ReactDOM.render(<Provider store={store}><Router><App /> </Router></Provider>, document.getElementById('app'));