import {FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        
       alert("Usuário cadastrado com sucesso:" + username + " - " + username + " - " + password);
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Cadastro no sistema</h1>
        <div className="input-field">
           <input type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)} 
            />
           <FaUser className="icon" />
           </div>
           <div className="input-field">
            <input type="email"
            placeholder="Confirmar E-mail"
            onChange={(e) => setUsername(e.target.value)}
            />
             <FaUser className="icon" />
           </div>
           <div className="input-field">
           <input 
           type="password" 
           placeholder="Senha" 
           onChange={(e) => setPassword(e.target.value)} 
           />
           <FaLock className="icon" />
           </div>

           <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#">Ajuda?</a>
           </div>

           <button>Registrar</button>

           <div className="signup-link">
            <p>
                Já têm uma conta? <a href="#">Entrar</a>
            </p>
           </div>
        </form>
    </div>
  );
};

export default Login;