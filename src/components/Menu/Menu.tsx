import Link from "next/link";

export function Menu() {
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
  return (
    <div>
      <Link href={""}>
        <a>Play</a>
      </Link>
      <Link href={""}>
        <a>Help</a>
      </Link>
      <Link href={""}>
        <a>About</a>
      </Link>
    </div>
  );
}
