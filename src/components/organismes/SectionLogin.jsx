import Input from "../moleculas/Input";
import { useState } from "react";
import './SectionLogin.css';

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function SectionLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handlerChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleLogin = () => {
    if (validateEmail(username)) {
      alert('Correo electrónico válido. Iniciar sesión...');
    } else {
      alert('Correo electrónico no válido. Introduce un correo válido.');
    }
  }

  return ( 
    <div className="DivLogin">
      <Input name="username" title="Username" type="text" onChange={handlerChangeUsername}/>
      <Input name="password" title="Password" type="password"/>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default SectionLogin;


