import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("all genre");
    const [rating, setRating] = useState("all");



    const handleSearch = (e) => {

        setSearchTerm(e.target.value);
    }
    const handleGenre = (e) => {
        setGenre(e.target.value);

    }
    const HandlRating = (e) => {
        setRating(e.target.value);
    }
    const matchesGenre = (movie, genre) => {
        return genre === "all genre" || movie.genre === genre;

    }
    const matchesSearchTerm = (movie, searchTerm) => {

        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());

    }
    const seperateRating = (rating) => {
        if (rating >= 8) {

            return "good";
        }
        if (rating > 5 && rating < 8) {
            return "ok";
        }
        if (rating <= 5) {
            return "bad";
        }
    };
    const matchesRating = (movie, rating) => {

        return seperateRating(movie.rating) === rating || rating === "all";
    }



    const filterMovies = movies.filter((movie) => {
        return matchesSearchTerm(movie, searchTerm) && matchesGenre(movie, genre) && matchesRating(movie, rating.toLowerCase());
    }
    );



    return (<>
        <input type="search" id="search" placeholder="search movie..." className="search-input" onChange={handleSearch} />
        <div className="filter-bar">
            <div className="filter-slot">
                <label>Genre</label>
                <select className="filter-dropdown" onChange={handleGenre}>
                    <option>all genre</option>
                    <option>action</option>
                    <option>drama</option>
                    <option>fantasy</option>
                    <option>horror</option>
                </select>
            </div>
            <div className="filter-slot">
                <label>Rating</label>
                <select className="filter-dropdown" onChange={HandlRating}>
                    <option>all</option>
                    <option>Good</option>
                    <option>Ok</option>
                    <option>Bad</option>
                </select>
            </div>
        </div>
        <div className="movies-grid">

            {console.log("render")}


            {
                filterMovies.map((movie) =>
                (
                    <MovieCard movie={movie} key={movie.id} toggleWatchlist={toggleWatchlist} iswatchlisted={watchlist.includes(movie.id)} />
                )
                )


            }

        </div></>);

}