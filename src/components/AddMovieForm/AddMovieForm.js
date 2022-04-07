import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
    const { movies, setMovies } = props;

    const [title, setTitle] = useState("");

    const [date, setDate] = useState("");

    const [image, setImage] = useState("");

    const [type, setType] = useState("");

    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isImageError, setIsImageError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);

    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleImage(e) {
        setImage(e.target.value);
    }

    function handleType(e) {
        setType(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();



        if (title === "") {
            setIsTitleError(true);
        }

        else if (date === "") {
            setIsTitleError(false);
            setIsDateError(true);
        }

        else if (image === "") {
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(true);
        }

        else if (type === "") {
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(false);
            setIsTypeError(true);
        }

        else {
    
            const movie = {
                id: nanoid(10),
                title: title,
                year: date,
                type: type,
                poster: image,
            };

            setMovies([...movies, movie]);
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(false);
            setIsTypeError(false);
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src="https://picsum.photos/600/400" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie Form</h2>
                    <form onSubmit={handleSubmit} className={styles.form__list}>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="title"
                                className={styles.form__label}>
                                Title
                            </label>
                            <input
                                onChange={handleTitle}
                                id="title"
                                type="text"
                                className={styles.form__input}
                                value={title}
                            />
                            {/* 
                            menambahkan conditional operator
                            Jika isTitleError true: munculkan error
                            Jika false: munculkan string kosong
                             */}
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="date"
                                className={styles.form__label}>
                                Year
                            </label>
                            <input
                                onChange={handleDate}
                                id="date"
                                type="number"
                                className={styles.form__input}
                                value={date}
                            />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="image"
                                className={styles.form__label}>
                                Image Address
                            </label>
                            <input
                                onChange={handleImage}
                                id="image"
                                type="text"
                                className={styles.form__input}
                                value={image}
                            />
                            {isImageError && <Alert>Image Address Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="type"
                                className={styles.form__label}>
                                Genre
                            </label>
                            <select id="type" className={styles.form__input} value={type} onChange={handleType}>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                                <option value="comedy">Comedy</option>
                                <option value="superhero">Superhero</option>
                                <option value="fantasy">Fantasy</option>
                            </select>
                            {isTypeError && <Alert>Genre Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <button className={styles.form__button}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    );
}

export default AddMovieForm;