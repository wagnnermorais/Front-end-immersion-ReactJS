import "./Form.css";
import { useState } from "react";

const Form = () => {
  // Manipulação de Dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  {
    /* Envio de formulário */
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);

    // Limpando Formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* Criação de formulário */}

      {/* Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            // Manipulação de dados
            onChange={handleName}
            // Controlled Input
            value={name || ""}
          />
        </div>

        {/* Label envolvendo o input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            // Manipulação de dados | Manipulação simplificada
            onChange={(e) => setEmail(e.target.value)}
            // Controlled Input
            value={email || ""}
          />
        </label>

        {/* Input textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* Input select */}
        <label>
          <span>Função no Sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
