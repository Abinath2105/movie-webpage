import React, { useState, useEffect, useCallback } from 'react';
import './SearchPage.css'; // Ensure this CSS file contains your styles
import debounce from 'lodash/debounce';

const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showSearchList, setShowSearchList] = useState(false);
    const [page, setPage] = useState(1);

    const fetchMovies = async (term, pageNum) => {
        if (term.trim().length > 0) {
            const URL = `https://omdbapi.com/?s=${term}&page=${pageNum}&apikey=fc1fef96`;
            try {
                const response = await fetch(URL);
                const data = await response.json();
                if (data.Response === 'True') {
                    setMovies(prevMovies => [...prevMovies, ...data.Search]);
                    setShowSearchList(true);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
                setMovies([]);
            }
        } else {
            setMovies([]);
            setShowSearchList(false);
        }
    };

    const handleSearch = useCallback(debounce((term) => {
        setPage(1);
        setMovies([]);
        fetchMovies(term, 1);
    }, 300), []);

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);

    const handleMovieClick = async (imdbID) => {
        setShowSearchList(false);
        setSearchTerm('');
        try {
            const response = await fetch(`https://omdbapi.com/?i=${imdbID}&apikey=fc1fef96`);
            const data = await response.json();
            if (data.Response === 'True') {
                setSelectedMovie(data);
            } else {
                setSelectedMovie(null);
            }
        } catch (error) {
            console.error('Error fetching movie details:', error);
            setSelectedMovie(null);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.search-container')) {
            setShowSearchList(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const loadMoreMovies = () => {
        setPage(prevPage => {
            const nextPage = prevPage + 1;
            fetchMovies(searchTerm, nextPage);
            return nextPage;
        });
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="search-container">
                    <div className="search-box">
                        <input
                            type="text"
                            className="form-control"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Enter movie title"
                        />
                        <span className="search-icon" onClick={() => handleSearch(searchTerm)}>
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    {showSearchList && (
                        <div className="search-list">
                            {movies.map(movie => (
                                <div
                                    key={movie.imdbID}
                                    className="search-list-item"
                                    onClick={() => handleMovieClick(movie.imdbID)}
                                >
                                    <div className="search-item-thumbnail">
                                        <img src={movie.Poster !== "N/A" ? movie.Poster : "image_not_found.png"} alt={movie.Title} />
                                    </div>
                                    <div className="search-item-info">
                                        <h3>{movie.Title}</h3>
                                        <p>{movie.Year}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="load-more" onClick={loadMoreMovies}>Load More</button>
                        </div>
                    )}
                </div>
                {selectedMovie && (
                    <div className="result-grid">
                        <div className="movie-card">
                            <div className="movie-info">
                                <h3 className="movie-title">{selectedMovie.Title}</h3>
                                <ul className="movie-misc-info">
                                    <li className="year">Year: {selectedMovie.Year}</li>
                                    <li className="rated">Ratings: {selectedMovie.Rated}</li>
                                    <li className="released">Released: {selectedMovie.Released}</li>
                                </ul>
                                <p className="genre"><b>Genre:</b> {selectedMovie.Genre}</p>
                                <p className="writer"><b>Writer:</b> {selectedMovie.Writer}</p>
                                <p className="actors"><b>Actors:</b> {selectedMovie.Actors}</p>
                                <p className="plot"><b>Plot:</b> {selectedMovie.Plot}</p>
                                <p className="language"><b>Language:</b> {selectedMovie.Language}</p>
                                <p className="awards"><b><i className="fas fa-award"></i></b> {selectedMovie.Awards}</p>
                            </div>
                            <div className="movie-poster">
                                <img src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "image_not_found.png"} alt="movie poster" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieSearch;
