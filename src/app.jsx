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
  const [avgRating, setAvgRating] = useState();

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

  useEffect(() => {
    if (prod) {
      server.get('/reviews/meta', {'product_id': prod.id})
      .then((data) => {
        let sum = 0;
        let reviewCount = 0;
        for(var key in data.data.ratings) {
          let thisKey = parseInt(key);
          let thisVal = parseInt(data.data.ratings[key]);
          reviewCount += thisVal;
          sum += thisVal * thisKey;
        }
        let average = parseInt((Math.round(4 * sum / reviewCount) / 4).toFixed(2));
        setAvgRating(average);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [prod])

  function handleProduct (event) {
    server.get('/product', {product_id: event.target.alt})
      .then((data) => {
        setProd(data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Overview prod={prod} avgRating={avgRating}/>
      <Comparisons prod={prod} handleProduct={handleProduct}/>
      <QandA prod={prod}/>
      <div id="reviews"><RandR  prod={prod} avgRating={avgRating}/></div>
    </div>
    );
}


export default App;