import style from "./Help.module.scss";

export default function Help() {
  return (
    <div className={style.container}>
      <div className={style.section}>
        <img
          src={`${process.env.REACT_APP_DOMAIN}/icons/FlickMaster.png`}
          width={100}
          height={100}
          alt="flickmaster"
        />
        <figure>
          <div className={style.title}>Flick Master</div>
          <div className={style.description}>
            If the color was Pink, swipe in the opposite direction of the arrow,
            otherwise swipe in the direction of the arrow
          </div>
        </figure>
      </div>
      <div className={style.section}>
        <img
          src={`${process.env.REACT_APP_DOMAIN}/icons/HighOrLow.png`}
          width={100}
          height={100}
          alt="highorlow"
        />
        <figure>
          <div className={style.title}>High Or Low</div>
          <div className={style.description}>
            If the number was greater than the last number swipe up
          </div>
        </figure>
      </div>
      <div className={style.section}>
        <img
          src={`${process.env.REACT_APP_DOMAIN}/icons/FollowTheLeader.png`}
          width={100}
          height={100}
          alt="followtheleader"
        />
        <figure>
          <div className={style.title}>Follow The Leader</div>
          <div className={style.description}>Tap in the order that appears</div>
        </figure>
      </div>
      <div className={style.section}>
        <img
          src={`${process.env.REACT_APP_DOMAIN}/icons/UnfollowTheLeader.png`}
          width={100}
          height={100}
          alt="unfollowtheleader"
        />
        <figure>
          <div className={style.title}>Unfollow The Leader</div>
          <div className={style.description}>
            Tap in the opposite order that appears
          </div>
        </figure>
      </div>
    </div>
  );
}
