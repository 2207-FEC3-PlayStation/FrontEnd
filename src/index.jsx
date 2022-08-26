import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/Overview/Overview.jsx';
import QandA from './components/QandA/QandA.jsx';
import RandR from './components/RandR/RandR.jsx';
import Comparisons from './components/Comparisons/Comparisons.jsx';


const App = () => {
return (
  <div>
    <h1>Hello World</h1>
    <Overview/>
    <Comparisons/>
    <QandA/>
    <RandR/>
  </div>
  );
}
//new syntax for React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);