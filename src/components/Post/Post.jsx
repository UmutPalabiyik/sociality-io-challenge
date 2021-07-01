import "./Post.scss";
import { CheckIcon, BanIcon, MoreIcon, DeleteIcon } from "../../icons/Icons";

const Post = ({ state }) => {

    var xhttp=new XMLHttpRequest();
    var fafa = xhttp.open('GET', `${state.entry.image[0]}`, false);
    console.log(fafa)


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
    state.status === 4
    ? ( <div className="post__icons"><DeleteIcon /><MoreIcon/></div> )
    : state.status === 3
    ? ( <div className="post__icons"><DeleteIcon/><MoreIcon/></div> )
    : state.status === 2
    ? ( <div className="post__icons"><DeleteIcon/><MoreIcon/></div> )
    : state.status === 1
    ? ( <div className="post__icons"><BanIcon/><DeleteIcon/><MoreIcon/> </div> )
    : ( <div className="post__icons"><CheckIcon/><DeleteIcon/><MoreIcon/> </div> )
    
     

  

  return (
    <div className="post">
      <div className={`post__social post__social--${status}`}>asd</div>
      <div className="post__container">
        <div className="post__heading">
          <div className="post__date">{state.published_at}</div>
          {iconSet}
        </div>
        <div className="post__content">
            <div className="post__itself">{state.entry.message}</div>
            <img className="post__img" src={state.entry.image[0]} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Post;
