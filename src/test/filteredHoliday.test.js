import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Countries from '../components/Countries';

const mockStore = configureStore([]);

describe('Countries component', () => {
  test('renders filtered holidays based on search input', () => {
    const mockAllHolidays = [
      {
        countryCode: 'US',
        name: 'United States',
      },
      {
        countryCode: 'CA',
        name: 'Canada',
      },
      {
        countryCode: 'GB',
        name: 'United Kingdom',
      },
    ];

    const initialState = {
      allHolidays: {
        AllHolidays: mockAllHolidays,
        isLoading: false,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <Countries />
        </Router>
      </Provider>,
    );

    const searchInput = screen.getByPlaceholderText('e.g. Andorra');
    fireEvent.change(searchInput, { target: { value: 'United' } });
    const filteredHolidayElements = screen.getAllByTestId('filtered-holiday');
    expect(filteredHolidayElements).toHaveLength(2);
    expect(filteredHolidayElements[0]).toHaveTextContent('United States');
    expect(filteredHolidayElements[1]).toHaveTextContent('United Kingdom');
  });
});
