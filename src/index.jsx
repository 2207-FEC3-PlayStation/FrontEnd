import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import server from './serverRequests.js';
import Overview from './components/Overview/Overview.jsx';
import RandR from './components/RandR/RandR.jsx';
import Comparisons from './components/Comparisons/Comparisons.jsx';


const App = () => {

  const [prod, setProd] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (prod === null) {
      var idParam = 66646;
    } else {
      var idParam = prod.id;
    }
    server.get('/products', idParam)
      .then((data) => {
        setProd(data.data)
      })
      .catch((err) => {
        console.log(err);
      });
      server.get('/reviews/meta', {'product_id': idParam})
        .then((data) => {
          setReviews(data.data)
        })
        .catch((err) => {
          console.log(err);
        })
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <Overview/>
      <Comparisons/>
      <RandR reviews={reviews}/>
    </div>
    );
}
//new syntax for React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

