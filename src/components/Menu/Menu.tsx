import { useNavigate } from "react-router-dom";
import style from "./Menu.module.scss";

export function Menu() {
  const navigate = useNavigate();
  const games = [
    {
      key: "fkm",
      name: "Flick Master",
      id: "FlickMaster",
      class: "flickMaster",
      img: "/icons/FlickMaster.png",
    },
    {
      key: "ftl",
      name: "Follow The Leader",
      id: "FollowTheLeader",
      class: "followTheLeader",
      img: "/icons/FollowTheLeader.png",
    },
    {
      key: "hol",
      name: "High or Low",
      id: "HighOrLow",
      class: "highOrLow",
      img: "/icons/HighOrLow.png",
    },
    {
      key: "uftl",
      name: "Unfollow the Leader",
      id: "UnfollowTheLeader",
      class: "unfollowTheLeader",
      img: "/icons/UnfollowTheLeader.png",
    },
  ];

  const StartGame = (game: string) => {
    navigate(`/playground/${game}`);
  };

  return (
    <div className={style.gameContainer}>
      {games.map((game) => (
        <div
          className={`${style.game} ${style[game.class]}`}
          key={game.key}
          onClick={() => StartGame(game.id)}
        >
          <div className={style.icon}>
            <img src={game.img} alt={game.name} width={100} height={100} />
          </div>
          <div className={style.gameName}>{game.name}</div>
        </div>
      ))}
    </div>
  );
}
