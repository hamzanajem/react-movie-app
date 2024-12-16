import { useState } from "react";

export default function MovieCard({ movie, toggleWatchlist, iswatchlisted }) {
    //const [checkvalue, setCheckValue] = useState(false);
    const HandleError = (e) => {
        e.target.src = "images/default.jpg";
    }
    const getRatingClass = (rating) => {
        if (rating >= 8) {

            return 'rating-good';
        }
        if (rating > 5 && rating < 8) {
            return 'rating-ok';
        }
        if (rating <= 5) {
            return 'rating-bad';
        }
    };
    const handleselect = (e) => {
        console.log(e.target.checked);
        // setCheckValue(e.target.checked);
        toggleWatchlist(movie.id);

    }

    return (
        <div key={movie.id} className="movie-card" >
            <img src={`images/${movie.image}`} alt={movie.title} onError={HandleError} />
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <div><span className="movie-card-genre"> {movie.genre}</span>
                    <span className={`movie-card-rating ${getRatingClass(movie.rating)}`} > {movie.rating}</span>
                </div>
                <label className="switch">
                    <input type="checkbox" onChange={handleselect} checked={iswatchlisted} />
                    <span className="slider">
                        <span className="slider-label">{iswatchlisted ? "in watch list" : "add to watch list"}</span>
                    </span>
                </label>
            </div>
        </div>
    );
}