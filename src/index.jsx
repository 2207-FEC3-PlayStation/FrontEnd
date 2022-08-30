import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import server from './serverRequests.js';
import Overview from './components/Overview/Overview.jsx';
import QandA from './components/QandA/QandA.jsx';
import RandR from './components/RandR/RandR.jsx';
import Comparisons from './components/Comparisons/Comparisons.jsx';
// import styled from 'styled-components'



const App = () => {

  const [prod, setProd] = useState(null);

  useEffect(() => {
    if (prod === null) {
      var idParam = 66646;
    } else {
      var idParam = prod.id;
    }
    server.get('/product', {product_id: idParam})
      .then((data) => {
        setProd(data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!prod) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Overview/>
      <Comparisons prod={prod}/>
      <QandA />
      <RandR prod={prod}/>
    </div>
    );
}
//new syntax for React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

