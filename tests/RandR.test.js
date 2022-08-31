import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/app.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Ratings and Reviews Tests', () => {
  const user = userEvent.setup();

  render(<App />)

  it('Overall Product review rating should be 4.0 for default product 66646', () => {
    setTimeout(() => {
      expect(screen.getByTestId('ReviewNum').toHaveTextContent('4.0'))
    })
  })
})