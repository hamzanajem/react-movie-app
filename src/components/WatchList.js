import MovieCard from "./MovieCard";
export default function WatchList({ movies, watchlist, toggleWatchlist }) {
    /* const watchlisted = movies.filter((movie) => watchlist.includes(movie.id));
     console.log('watch', watchlisted)*/

    return (<>
        <h1 className="title">your WatchList</h1>

        <div className="watchlist">



            {
                watchlist.map((id) => {
                    const movie = movies.find((movie) => movie.id === id);
                    return <MovieCard movie={movie} key={id} toggleWatchlist={toggleWatchlist} iswatchlisted={true} />
                }
                )


            }

        </div>
    </>
    )
}