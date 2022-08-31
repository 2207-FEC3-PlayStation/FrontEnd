import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/app.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Comparisons Test', function() {
  const user = userEvent.setup();

  render(<App />)

  it('should should have the correct name for our first product in dummy data 66642', () => {
  setTimeout(()=>{
      expect.(screen.getByTestId('relatedItemName').toHaveTextContent('Camo Onesie'))
    })
  });

});