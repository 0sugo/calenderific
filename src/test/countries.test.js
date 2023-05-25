import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter component
import Countries from '../components/Countries';

const mockStore = configureStore([]);

test('renders the Countries component correctly', () => {
  const initialState = {
    allHolidays: {
      AllHolidays: [
        {
          countryCode: 'US',
          name: 'United States',
        },
        {
          countryCode: 'CA',
          name: 'Canada',
        },
      ],
      isLoading: false,
    },
  };

  const store = mockStore(initialState);

  const { container } = render(
    <Provider store={store}>
      <Router> {/* Wrap the component with the Router */}
        <Countries />
      </Router>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});

test('renders the loading state correctly', () => {
  const initialState = {
    allHolidays: {
      AllHolidays: [],
      isLoading: true,
    },
  };

  const store = mockStore(initialState);

  const { container } = render(
    <Provider store={store}>
      <Router> {/* Wrap the component with the Router */}
        <Countries />
      </Router>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
