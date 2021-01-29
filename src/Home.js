import { useState, useEffect } from 'react'
import Movies from './Movies'

const Home = () => {
    const [movies, setMovies] = useState(null)
    const movData = [];
    useEffect(() => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey={YOUR_API_KEY}")
        .then(res => {
            return res.json();
        })
        .then((data) => {
            // console.log(JSON.parse(JSON.stringify(data)))
            let finData = JSON.parse(JSON.stringify(data));
            movData.push(finData);
            setMovies(movData);
        });
    }, []);

    return ( 
        <div>
            <h1>Home</h1>
            {movies && <Movies movies={movies}/>}
        </div> 
    );
}
 
export default Home;