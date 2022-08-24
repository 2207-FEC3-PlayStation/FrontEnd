import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx';
import RandR from './components/RandR/RandR.jsx';
import Comparisons from './components/Comparisons/Comparisons.jsx';


const App = () => {
return (
  <div>
    <h1>Hello World</h1>
    <Overview/>
    <Comparisons/>
    <RandR/>
  </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));