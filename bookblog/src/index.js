import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

// Components
import Main from './components/mainComponent';

function App() {
  return(
    <div>
      <Main />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

