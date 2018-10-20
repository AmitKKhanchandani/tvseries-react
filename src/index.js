import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';

// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }

// const greetings = React.createElement('h1',{},'Hello World!');
// const greetings = <h1>Hello World! Amit, Current Date: {getCurrentDate()}</h1>;

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();