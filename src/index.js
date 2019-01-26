import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
