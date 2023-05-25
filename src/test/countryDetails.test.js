import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom'; // Import the MemoryRouter component
import CountryDetails from '../components/CountryDetails';

const mockStore = configureStore([]);

test('renders the CountryDetails component correctly', () => {
  const initialState = {
    countryDetails: {
      country: [
        {
          countryCode: 'US',
          name: 'United States',
          date: '2023-01-01',
        },
        {
          countryCode: 'US',
          name: 'Independence Day',
          date: '2023-07-04',
        },
      ],
    },
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
    },
  };

  const store = mockStore(initialState);

  const { container } = render(
    <Provider store={store}>
      <MemoryRouter> {/* Wrap the component with the MemoryRouter */}
        <CountryDetails />
      </MemoryRouter>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
