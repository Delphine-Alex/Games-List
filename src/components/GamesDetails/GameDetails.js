import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Axios from "axios";

import './GameDetails.css';

const GameDetails = () => {
    const [gameInfo, setGameInfo] = useState(false);
    const {id} = useParams()
  
    useEffect(() => {
        const fetchDetails = () => {
          Axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((res) => res.data)
            .then((data) => {
              if (data) {
                setGameInfo(data);
              }
            });
        };
      fetchDetails();
    }, [id]);
  

    return (
        <div>
                <Link to="/">
                    <button className="switch-btn">Back to Home</button>
                </Link>
                <div className="cardsbis">
                    <div className="cardbis">
                        <div className="cardbis-head">
                            <img src={gameInfo.background_image} alt={gameInfo.name} />
                        </div>
                        <div className="cardbis-body">
                            <h2>{gameInfo.name}</h2>
                            <p><strong>Rating :</strong> {gameInfo.rating}/5</p>
                            <p><strong>Released :</strong> {gameInfo.released}</p>
                            <div className="screens">
                                {gameInfo.short_screenshots && gameInfo.short_screenshots.map((screen) => {
                                    return (
                                        <img src={screen.image} alt={screen.id} key={screen.id} style={{ width: "14%" }} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default GameDetails;