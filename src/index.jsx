import React from 'react';
import ReactDOM from 'react-dom';
import RandR from './components/RandR/RandR.jsx';

const App = () => {
return (
  <div>
    <h1>Hello World</h1>
    <RandR/>
  </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));