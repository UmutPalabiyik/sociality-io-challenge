import Post from "../../components/Post/Post";
import "./PostsList.scss";

const PostsList = ({ day }) => {
    
  return (
    <div className="posts-list">
      {day.map((state) => {
        return <Post state={state} />;
      })}
    </div>
  );
};

export default PostsList;
