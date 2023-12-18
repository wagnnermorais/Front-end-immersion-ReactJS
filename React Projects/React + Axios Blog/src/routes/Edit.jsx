import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import url from "../services/config";

const Edit = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await url.get(`/posts/${id}`);
      const data = response.data;

      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };
    await url.put(`/posts/${id}`, {
      body: post,
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="new-post">
      <h2 className="post-main-title">Editando: {title}</h2>
      <form className="form" onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          />
        </div>
        <input type="submit" value="Editar post" className="button" />
      </form>
    </div>
  );
};

export default Edit;
