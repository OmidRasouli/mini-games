import Timer from "../components/Timer/Timer";
import HighOrLow from "../components/Games/HighOrLow/HighOrLow";
import FlickMaster from "../components/Games/FlickMaster/FlickMaster";
import FollowTheLeader from "../components/Games/FollowTheLeader/FollowTheLeader";
import UnfollowTheLeader from "../components/Games/UnfollowTheLeader/UnfollowTheLeader";

import {
  ConditionalGameRender,
  Condition,
} from "../components/ConditionalRender/ConditionalGameRender";

export function PlayGround() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  return (
    <div>
      <Timer expiryTimestamp={time} />
      <ConditionalGameRender game="FlickMaster">
        <Condition game={HighOrLow} count={60} />
        <Condition game={FlickMaster} count={60} />
        <Condition game={FollowTheLeader} count={60} />
        <Condition game={UnfollowTheLeader} count={60} />
      </ConditionalGameRender>
    </div>
  );
}
