import Image from "next/image";
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
          <div className={style.icon}>
            <Image src={game.img} alt={game.name} width={100} height={100} />
          </div>
          <div className={style.gameName}>{game.name}</div>
        </div>
      ))}
    </div>
  );
}
