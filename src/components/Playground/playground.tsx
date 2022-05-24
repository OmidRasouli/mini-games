import { useState } from "react";
import Timer from "../Timer/Timer";
import HighOrLow from "../Games/HighOrLow/HighOrLow";
import FlickMaster from "../Games/FlickMaster/FlickMaster";
import FollowTheLeader from "../Games/FollowTheLeader/FollowTheLeader";
import UnfollowTheLeader from "../Games/UnfollowTheLeader/UnfollowTheLeader";
import style from "./playground.module.scss";

export function PlayGround(props: { game: string }) {
  const [choosenGame] = useState<string>(props.game);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  function RenderGame(game: string) {
    switch (game) {
      case "HighOrLow":
        return <HighOrLow count={60} />;
      case "FlickMaster":
        return <FlickMaster count={60} />;
      case "FollowTheLeader":
        return <FollowTheLeader count={60} />;
      case "UnfollowTheLeader":
        return <UnfollowTheLeader count={60} />;

      default:
        return <></>;
    }
  }

  return (
    <div className={style.playground}>
      <Timer expiryTimestamp={time} />
      {RenderGame(choosenGame)}
    </div>
  );
}
