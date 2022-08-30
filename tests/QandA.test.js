import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/app.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

// describe('Questions and Answers tests', function() {
//   const user = userEvent.setup();
//   render(<App />)
//   it('LOAD MORE ANSWERS (button) should increase count by 1', () => {
//     return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
//       .then(() => {
//         expect(screen.getByTestId('count')).toHaveTextContent('0');
//         return user.click(screen.getByRole('button', {name: 'LOAD MORE ANSWERS'}))
//       })
//       .then(() => {
//         expect(screen.getByTestId('count')).toHaveTextContent('1');
//       })
//   });
// });