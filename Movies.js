import React, { useEffect, useState } from "react";
import axios from "axios";
import './Wishlist.css'
import { Link } from "react-router-dom";
import './description.css'

function Movies() {
  const [movies, setmovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=76deadecb4e996be0639c6b2a624a68c"
        );
        setmovie(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div id="wish">

        
      <h2 className="titile">Movies</h2>
      <div
        className="row_posters"
        style={{ display: "flex", overflow: "hidden", overflow: "scroll" }}
      >
        {movies.map((list) => {
          return (
            <span
              style={{
                width: "250px",
                heigth: "270px",
                margin: "10px",
                marginLeft: "20px"
            }}
            >
              <Link to='/moviedescription'state={{ list: list }} >
                <div className="card">
                  <img
                    variant="top"
                    className="row_poster"
                    src={`https://image.tmdb.org/t/p/original${list.poster_path}`}
                  />
                </div>
                </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default Movies;