import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import { HolidayFetcher } from './redux/Holiday/HolidaySlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HolidayFetcher());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="CountryDetails" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
