import { useRouter } from "next/router";
import style from "./Menu.module.scss";

export function Menu() {
  const router = useRouter();
  const games = [
    {
      key: "fkm",
      name: "Flick Master",
      id: "FlickMaster",
      class: "flickMaster",
    },
    {
      key: "ftl",
      name: "Follow The Leader",
      id: "FollowTheLeader",
      class: "followTheLeader",
    },
    { key: "hol", name: "High or Low", id: "HighOrLow", class: "highOrLow" },
    {
      key: "uftl",
      name: "Unfollow the Leader",
      id: "UnfollowtheLeader",
      class: "unfollowTheLeader",
    },
  ];

  const StartGame = (game: string) => {
    router.push(`playground/${game}`);
  };

  return (
    <div className={style.gameContainer}>
      {games.map((game) => (
        <div
          className={`${style.game} ${style[game.class]}`}
          key={game.key}
          onClick={() => StartGame(game.id)}
        >
          <div className={style.icon}></div>
          <div className={style.gameName}>{game.name}</div>
        </div>
      ))}
    </div>
  );
}
