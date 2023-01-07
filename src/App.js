import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
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
          <Link to="/Categories">Categories</Link>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
