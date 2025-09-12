import { useState } from 'react';
import './login.css';


function Login() { 

  //Armazena o valor digitado pelo usuário
  const [username, setUsername] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');

  //Verificação simples
  const fazerLogin = (username: string, password: string) => {

    if (username === 'usuario' && password === 'Teste123') {
      console.log('Login feito com sucesso!');
      return true;
    } else {
        console.log('Usuário ou senha incorretos');
        return false;
    }
  };
  
  
  //Lida com a ação de login, após o envio do formulário
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //Impede o recarregamento da página após o envio do formulário
    console.log('Fazendo login com', username, password); //Teste da entrada de dados
    fazerLogin(username, password);
  }

  
  return (
    // criei uma div body para não afetar o estilo das outras páginas
    <div className="body">
      <div className="container">
        <h1>SmartLight</h1>
        <form noValidate onSubmit={handleLogin}>
          <label htmlFor="usuario">Usuário:</label>
          <input 
          type="email" 
          id="usuario" 
          name="usuario" 
          onChange = {(e) => setUsername(e.target.value)} //atualiza o valor digiado
          value = {username} required />
          <label htmlFor="senha">Senha:</label>
          <input 
          type="password" 
          id="senha" 
          name="senha" 
          onChange = {(e) => setPassword(e.target.value)}
          value = {password} required />

          <button type="submit">Entrar</button>

      </form>
    </div>
    </div>
  );
}

export default Login;