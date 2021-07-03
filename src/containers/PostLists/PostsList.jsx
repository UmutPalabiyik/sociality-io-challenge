import Post from "../../components/Post/Post";
import "./PostsList.scss";

const PostsList = ({ day, heading }) => {
  const date = new Date(heading);
  const dateWithMonthName =
    date.getFullYear() +
    "-" +
    date.toLocaleString("en-EN", { month: "long" }) +
    "-" +
    date.getDay()

    

  return (
    <div className="posts-list">
      <h2 className="posts-list__heading">{dateWithMonthName}</h2>
      <div className="posts-list__container">
        {day.map((state) => {
          return <Post state={state} />;
        })}
      </div>
    </div>
  );
};

export default PostsList;
