
import './login.css';




function Login() { 

  return (
    // criei uma div body para não afetar o estilo das outras páginas
    <div className="body">
      <div className="container">
        <h1>SmartLight</h1>
        <form action="Usuario" method="post">
          <label htmlFor="usuario">Usuário:</label>
          <input type="email" id="usuario" name="usuario" required />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />


            <button type="submit">Enviar</button>


      </form>
    </div>
    </div>
  );
}

export default Login;