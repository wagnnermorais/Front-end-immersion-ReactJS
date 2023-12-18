import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import url from "../services/config";
import "../styles/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const response = await url.get("/posts");
      const data = response.data;
      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1 className="main-title">Ultimos posts:</h1>
      {posts.length === 0 ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h4>{post.title}</h4>
            {post.body}
            <Link to={`/posts/${post.id}`} className="button">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
