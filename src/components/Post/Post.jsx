import "./Post.scss";
import {
  CheckIcon,
  BanIcon,
  MoreIcon,
  DeleteIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  WatchIcon,
} from "../../icons/Icons";

const Post = ({ state }) => {

  // detect url from text
  const detectURL = () => {
    let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return state.entry.message.match(urlRegex);
  };

  const status =
    state.status === 4
      ? "error"
      : state.status === 3
      ? "published"
      : state.status === 2
      ? "publishing"
      : state.status === 1
      ? "scheduled"
      : "approval";

  const iconSet =
    state.status === 4 ? (
      <div className="post__icons">
        <DeleteIcon />
        <MoreIcon />
      </div>
    ) : state.status === 3 ? (
      <div className="post__icons">
        <DeleteIcon />
        <MoreIcon />
      </div>
    ) : state.status === 2 ? (
      <div className="post__icons">
        <DeleteIcon />
        <MoreIcon />
      </div>
    ) : state.status === 1 ? (
      <div className="post__icons">
        <BanIcon />
        <DeleteIcon />
        <MoreIcon />{" "}
      </div>
    ) : (
      <div className="post__icons">
        <CheckIcon />
        <DeleteIcon />
        <MoreIcon />{" "}
      </div>
    );

  const socialIcon =
    state.account.channel === "instagrambusiness" ? (
      <InstagramIcon />
    ) : state.account.channel === "twitter" ? (
      <TwitterIcon />
    ) : (
      <FacebookIcon />
    );

  return (
    <div className="post">
      <div className={`post__social post__social--${status}`}>{socialIcon}</div>
      <div className="post__container">
        <div className="post__heading">
          <div className="post__date">{state.published_at}</div>
          {iconSet}
        </div>
        <div className="post__content">
          <div className="post__itself">
              {state.entry.message.replace(detectURL()," ")}
            <a href={detectURL()}>{detectURL()}</a>
          </div>
          <img className="post__img" src={state.entry.image[0]} alt="img" />
          <div className="post__icons post__icons--bottom">
            {
              <>
                <div className="post__icon-wrapper">
                  <LikeIcon />
                  <label className="post__label">88</label>
                </div>
                <div className="post__icon-wrapper">
                  <CommentIcon />
                  <label className="post__label">125</label>
                </div>
                <div className="post__icon-wrapper">
                  <ShareIcon />
                  <label className="post__label">95</label>
                </div>
                <div className="post__icon-wrapper">
                  <WatchIcon />
                  <label className="post__label">27</label>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
