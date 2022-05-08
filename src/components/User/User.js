import './User.css';

const formater = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
});

const User = (props) => {
  return (
    <div className="user">
      <img
        className="user__avatar"
        src={props.userProfile.avatarUrl}
        alt={`${props.userProfile.name} (${props.userProfile.nickName})`}
        width="210"
        height="210"
      />
      <h1 className="user__name">{props.userProfile.name}</h1>
      <a
        className="user__nick"
        href={props.userProfile.profileUrl}
        target="_blank"
      >
        {props.userProfile.nickName}
      </a>

      <ul className="partner-list">
        <li className="partner-list__item partner-list__item_followers">
          <span>
            {formater.format(props.userProfile.followers).toLowerCase()}
          </span>{' '}
          followers
        </li>
        <li className="partner-list__item partner-list__item_following">
          <span>
            {formater.format(props.userProfile.following).toLowerCase()}
          </span>{' '}
          following
        </li>
      </ul>
    </div>
  );
};

export default User;
