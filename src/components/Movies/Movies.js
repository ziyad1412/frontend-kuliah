import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
    const [movies, setMovies] = props;

    function addMovie() {
        const movie = {
            id: nanoid(10),
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400"
        };

        setMovies([...movies, movie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {
                        movies.map(function (movie) {
                            return <Movie key={movie.id} movie={movie} />;
                        })
                    }
                </div>
                {/* menambahkan event on Click */}
                <button onClick={addMovie}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;