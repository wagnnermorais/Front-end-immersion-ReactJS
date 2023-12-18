import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import url from "../services/config";
import "../styles/Post.css";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const getPost = async () => {
    try {
      const response = await url.get(`/posts/${id}`);
      const data = response.data;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <Loader />
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
