import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

// Components
import SearchNav from './components/searchNavComponent';
import BookRow from './components/bookRowComponent';

function App() {
  return(
    <div>
      <SearchNav />
      <BookRow />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

