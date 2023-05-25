import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders the Navbar component correctly', () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(container).toMatchSnapshot();
});
