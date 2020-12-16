import { useEffect, useState } from "react";
import Axios from "axios";

import Game from '../Game/Game';

import './GameList.css';

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const [bestGames, setBestGames] = useState (false);
  const [filtered, setFiltered] = useState ([]);
  const [games, setGames] = useState([]);


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

  useEffect(() => {
    const filtered = () => {
      setFiltered(gameList.filter(game => game.rating >= 4.5))
    }
    filtered()
  }, [gameList]);

  useEffect(() => {
    if (bestGames) {
      setGames ([...filtered])
    } else {
      setGames ([...gameList])
    }
  }, [filtered, gameList, bestGames]);

  const removeGame = (id) => {
    setGameList(gameList.filter((game) => game.id !== id));
  };

  return (
    <div>
      <strong>Click here !</strong>
      <button className="switch-btn" onClick={() => setBestGames(!bestGames)}>
        {bestGames ? "Best Games" : "All Games"}
      </button>
      <div className="cards">
        {games.map((game) => {
          return <Game {...game} key={game.id} removeGame={removeGame} />;
        })}
      </div>
    </div>
  );
};

export default GameList;
