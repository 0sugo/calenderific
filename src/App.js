import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

function App() {
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
