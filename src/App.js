import "./App.css";
import HomePage from "./home/HomePage";
import SinglePage from "./components/watch/SinglePage";
import SearchPage from "./components/search/SearchPage"; // Adjust the path as needed
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Movie from "./components/movie/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Series from "./components/series/Series";
import Tvshow from "./components/Tvshow/Tvshow";
import Sports from "./components/sports/Sports";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singlepage/:id" element={<SinglePage />} />
        <Route path="/search" element={<SearchPage />} /> {/* Added SearchPage route */}
        <Route path="/movie" element={<Movie />}/>
        <Route path="/series" element={<Series />}/>
        <Route path="/tvshow" element={<Tvshow />}/> 
        <Route path="/sports" element={<Sports />}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
