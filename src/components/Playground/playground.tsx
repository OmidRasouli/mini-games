import Timer from "../Timer/Timer";
import HighOrLow from "../Games/HighOrLow/HighOrLow";
import FlickMaster from "../Games/FlickMaster/FlickMaster";
import FollowTheLeader from "../Games/FollowTheLeader/FollowTheLeader";
import UnfollowTheLeader from "../Games/UnfollowTheLeader/UnfollowTheLeader";
import style from "./playground.module.scss";

import {
  ConditionalGameRender,
  Condition,
} from "../ConditionalRender/ConditionalGameRender";

export function PlayGround() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  return (
    <div className={style.playground}>
      <Timer expiryTimestamp={time} />
      <ConditionalGameRender game="HighOrLow">
        <Condition game={HighOrLow} count={60} />
        <Condition game={FlickMaster} count={60} />
        <Condition game={FollowTheLeader} count={60} />
        <Condition game={UnfollowTheLeader} count={60} />
      </ConditionalGameRender>
    </div>
  );
}
