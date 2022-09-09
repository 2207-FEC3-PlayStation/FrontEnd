import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

//new syntax for React 18
const container = document.getElementById('root');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App/>);