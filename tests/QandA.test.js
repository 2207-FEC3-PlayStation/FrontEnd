import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/app.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Q&A - Check for text', () => {
  it('should show correct text (QUESTIONS & ANSWERS)', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text().includes('QUESTIONS & ANSWERS')).toBe(true);
  });
});