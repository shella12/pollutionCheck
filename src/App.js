import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AQI from './components/AQI';
import logoIcon from './assests/logoIcon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img className="logo-image" src={logoIcon} alt="logo" />
          <h1 className="logo-heading">irQualityIndex</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/AQI" element={<AQI />} />
      </Routes>
    </div>
  );
}

export default App;
