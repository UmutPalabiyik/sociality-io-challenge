import Status from "../../components/Status/Status";
import PostsList from "../PostLists/PostsList";
import { useSelector } from "react-redux";
import "./Home.scss"

const Home = () => {


    const posts = useSelector((state) => state.posts.posts);


    const {"2021-06-17": day1,"2021-07-01": day2 } = posts["posts_by_date"];
    


     return(
        <div className="home">
            <Status/>
            <PostsList day={day1} heading="2021-06-17" />
            <PostsList day={day2} heading="2021-07-01" />
        </div>
    )
}

export default Home;