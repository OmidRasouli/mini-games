import Timer from "../components/Timer/Timer";
import HighOrLow from "../components/Games/HighOrLow/HighOrLow";
import FlickMaster from "../components/Games/FlickMaster/FlickMaster";
import FollowTheLeader from "../components/Games/FollowTheLeader/FollowTheLeader";
import UnfollowTheLeader from "../components/Games/UnfollowTheLeader/UnfollowTheLeader";

export function PlayGround() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  return (
    <div>
      <Timer expiryTimestamp={time} />
      <HighOrLow count={60} />
      <FlickMaster count={60} />
      <FollowTheLeader count={60} />
      <UnfollowTheLeader count={60} />{" "}
    </div>
  );
}
