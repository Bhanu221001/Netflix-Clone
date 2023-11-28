// // src/MovieSearch.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const API_KEY = '76deadecb4e996be0639c6b2a624a68c';
// const TMDB_API_URL = 'https://api.themoviedb.org/3/search/movie';

// const MovieSearch = ({ history }) => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(TMDB_API_URL, {
//         params: {
//           api_key: API_KEY,
//           query: query,
//         },
//       });

//       setResults(response.data.results);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleItemClick = (movieId) => {
//     // Pass the selected movie ID to the "/moviedetails" route
//     history.push(`/moviedetails${movieId}`);
//   };
// console.log(setResults)
//   return (
//     <div>
//       <h1>Netflix Movie Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for a movie..."
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {results.map((movie) => (
//           <li key={movie.id} onClick={() => handleItemClick(movie.id)}>
//             {/* Use Link properly to navigate to "/moviedetails" */}
//             <Link to={`/moviedetails${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieSearch;
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import Card from "../components/Card";
// // import "./search.css";
// function MovieSearch() {
//   const { title } = useParams();
//   const [searchedMovies, setSearchedMovies] = useState([]);

//   useEffect(() => {
//     getSearchMovie();
//   }, []);

//   const getSearchMovie = async () => {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/search/movie?&query=${title}&api_key=76deadecb4e996be0639c6b2a624a68c"
//     );
//     const data = await response.json();
//     setSearchedMovies(data.results);
//   };

//   return (
//     <section className="movie_poster">
//       <h2>Search results for "{title}"</h2>
//       <div
//         className="movie_flex"
//         style={{ display: "flex", overflow: "hidden" }}
//       >
//         {searchedMovies.length > 0 &&
//           searchedMovies.map((movie) => {
//             return (
//                 <div key={movie.id} movie={movie}>
//                 <div>
//                   <img
//                     className="posters"
//                     variant="top"
//                     src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//                     alt="movie_poster"
//                   />
//                   <p>{movie.title}</p>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </section>
//   );
// }

// export default MovieSearch;

import React, { useState, useCallback } from "react";
import axios from "axios";
import './moviesearch.css'
function MovieSearch() {
  const [search, setSearch] = useState([]);
  const [searchquery, setquery] = useState([]);
  const discoverendpoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=2bce79cc799af49fede4cc43ab85685c";
  const searchendpoints =
    "https://api.themoviedb.org/3/search/movie?api_key=2bce79cc799af49fede4cc43ab85685c";

  const fetchdata = useCallback(async () => {
    try {
      const endpoints = searchquery ? searchendpoints : discoverendpoint;
      const response = await axios.get(endpoints, {
        params: {
          query: searchquery,
        },
      });
      const { results } = response.data;
      setSearch(results);
    } catch (error) {
      console.error("something went wrong", error);
    }
  }, [searchquery, discoverendpoint, searchendpoints]);
  const handleShowAll = () => {
    fetchdata();
  };

  return (
    <div id="bg1">
      <div className="searchBar">
        <input
          type="text" id="text"
          value={searchquery}
          onChange={(e) => {
            setquery(e.target.value);
          }}
        ></input><br></br>
        <button id="button"onClick={handleShowAll}>Search</button>
      </div>
      {search.length > 0 ? (
        search.map((li) => (
          <div id="scroll" key={li.id}>
            {li.poster_path ? (
              <img id="images"
                src={`https://image.tmdb.org/t/p/w500${li.poster_path}`}
                alt="img"
              />
            ) : (
              <p>No poster available</p>
            )}
          </div>
        ))
      ) : (
        <p id="p1">No data available</p>
      )}
    </div>
  );
}

export default MovieSearch;
