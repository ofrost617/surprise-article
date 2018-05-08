import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ArticlePicker from './ArticlePicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<ArticlePicker />, document.getElementById('articlepicker'));

registerServiceWorker();
