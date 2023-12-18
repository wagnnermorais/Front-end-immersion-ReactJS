import { useState } from "react";
import { useNavigate } from "react-router-dom";
import url from "../services/config";
import "../styles/Create.css";

const Create = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };

    await url.post("/posts", {
      body: post,
    });

    navigate("/");
  };
  return (
    <div className="new-post">
      <h2 className="post-main-title">Inserir novo post:</h2>
      <form className="form" onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input type="submit" value="Criar post" className="button" />
      </form>
    </div>
  );
};

export default Create;
