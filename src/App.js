import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import AQI from './pages/AQI';
import logoIcon from './assests/logoIcon.png';
// import PageNotFound from './pages/PageNotFound';

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
        {/* <Route path="/AQI" element={<AQI />} />
        <Route path="/PageNotFound" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
