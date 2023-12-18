import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import url from "../services/config";
import "../styles/Admin.css";

const Admin = () => {
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

  const deletePost = async (id) => {
    await url.delete(`/posts/${id}`);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h2>Gerenciar posts</h2>
      {posts.length === 0 ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <div className="actions">
              <Link to={`/posts/edit/${post.id}`}>
                <button className="button edit-btn">Editar</button>
              </Link>
              <Link>
                <button
                  className="button delete-btn"
                  onClick={() => deletePost(post.id)}
                >
                  Deletar
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
