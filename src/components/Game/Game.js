import React, {useState} from 'react';

import "./Game.css"

const Game = ({ name, background_image, rating,released}) => {
    const [favorite, setFavorite] = useState(false);

        return(
            <div>
                <img className="img" src={background_image} alt={name} />
                <p>{name} {favorite && <img className="favorite" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg" alt="Like"/>}</p>
                <p>Rating : {rating}</p>
                <p>Released : {released}</p>
                <div>
                    <button className="favorite-btn" onClick={() => setFavorite(!favorite)}>
                    {favorite ? "Remove from favorites" : "Add to favorites"}
                    </button>
                </div>
            </div>
        )
}

export default Game;