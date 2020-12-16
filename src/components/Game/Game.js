import React, {useState} from 'react';

import "./Game.css";

const Game = ({ name, background_image, rating,released}) => {
    const [favorite, setFavorite] = useState(false);

        return(
            <div className="card">
                <img className="card-img" src={background_image} alt={name} />
                <div className="card-body">
                    <h2>{name} {favorite && <img className="favorite" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg" alt="Like"/>}</h2>
                    <p><strong>Rating :</strong> {rating}/5</p>
                    <p><strong>Released :</strong> {released}</p>
                    <div>
                        <button className="favorite-btn" onClick={() => setFavorite(!favorite)}>
                        {favorite ? "Remove from favorites" : "Add to favorites"}
                        </button>
                    </div>
                    <button className="delete-btn">Delete Game</button>
                </div>
            </div>
        )
}

export default Game;
