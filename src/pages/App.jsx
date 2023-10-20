import './App.css';

function App() {
  return (
    <form>

    <label 
    htmlFor="nombre">Nombre
    </label>
    <input type="text" />

    <label 
    htmlFor="correo">Correo
    </label>
    <input type="email" />

    <label 
    htmlFor="password">Password
    </label>
    <input type="password" />

    <label htmlFor="confirmarPassword">Confirmar Password</label>
    <input type="password" />

    <label htmlFor="fechaNacimiento">Fecha De Nacimiento    
    </label>
    <input type="date" />

    <label htmlFor="pais">Pais</label>
    <select>
      <option value="mx">México</option>
      <option value="co">Colombia</option>
      <option value="ar">Argentina</option>
    </select>

    <label htmlFor="file">Foto de perfil</label>
    <input type="file" />

    

    </form>
  )
}

export default App






