import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WatchList from './components/WatchList';
import { useEffect, useState } from "react";
function App() {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    fetch('movies.json').then(Response => Response.json()).then(data => setMovies(data));

  }, []);
  const toggleWatchlist = (moviedId) => {

    setWatchlist(prev => {
      return prev.includes(moviedId) ? prev.filter(id => id !== moviedId) : [...prev, moviedId];
    });
    console.log('watchlist', watchlist);
  }

  return (

    <div className="App">
      <div className='container'>
        <Header />


        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>

          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
            <Route path="/watchlist" element={<WatchList movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
          </Routes>
        </Router>

      </div>
      <Footer />
    </div>

  );
}

export default App;
