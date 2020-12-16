import React, {useState} from 'react';
import { Link } from "react-router-dom";

import "./Game.css";

const Game = ({ name, background_image, rating,released, id}) => {
    const [favorite, setFavorite] = useState(false);

        return(
            <div className="card">
                <img className="card-img" src={background_image} alt={name} />
                <div className="card-body">
                    <h2>{name} {favorite && <img className="favorite" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg" alt="Like"/>}</h2>
                    <p><strong>Rating :</strong> {rating}/5</p>
                    <p><strong>Released :</strong> {released}</p>
                    <div>
                        <Link to={`games/${id}`}>
                            <button className="view-game">View Game</button>
                        </Link>
                        <button className="favorite-btn" onClick={() => setFavorite(!favorite)}>
                        {favorite ? "Not Favorite" : "Favorite"}
                        </button>
                    </div>
                        <button className="delete-btn">Delete Game</button>
                </div>
            </div>
        )
}

export default Game;
