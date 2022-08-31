import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/app.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Q & A - Jest Test', function() {
  const user = userEvent.setup();
  render(<App />)
  it('should show the correct title on the first div block', () => {
  setTimeout(()=>{
      expect(screen.getByTestId('Search').toHaveTextContent('QUESTIONS & ANSWERS'))
    })
  });

});