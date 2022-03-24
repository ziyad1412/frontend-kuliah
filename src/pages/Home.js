import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";

function Main() {
    return (
        <main>
            <Hero />
            <Movies />
            <AddMovieForm />
        </main>
    );
}


function Home() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;