import { useEffect, useState } from "react";
import Axios from "axios";

import Game from '../Game/Game';

import './GameList.css';

const Gamelist = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchGames = () => {
      Axios.get("https://apis.wilders.dev/wild-games/games/")
        .then((res) => res.data)
        .then((data) => {
          if (data) {
            setGameList(data);
          }
        });
      };
      fetchGames();
  }, []);


  return (
    <div className="cards">
      {gameList.map((game) => {
        return <Game {...game} key={game.id} />;
      })}
    </div>
  );
};

export default Gamelist;