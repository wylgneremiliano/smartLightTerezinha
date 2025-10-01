import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
//import Alert from '@mui/material/Alert';


function Login() { 

  const navigate = useNavigate();

  //Armazena o valor digitado pelo usuário
  const [username, setUsername] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');

  //Verificação simples
  const fazerLogin = (username: string, password: string) => {



    const isLoggedIn = username === 'usuario' && password === 'Teste123';

    if (isLoggedIn) {
      localStorage.setItem("token", 'Login feito com sucesso!');
      navigate('/dashboard');
     
      return isLoggedIn;
    } else {
        console.log('Usuário ou senha incorretos');
        return isLoggedIn;
    }
  };

  //Lida com a ação de login, após o envio do formulário
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //Impede o recarregamento da página após o envio do formulário
    console.log('Fazendo login com', username, password); //Teste da entrada de dados
    fazerLogin(username, password);
  }

  //colocar useeffect verificando se o token existe, se existir redireciona para o dashboard
  //se não existir, permanece na página de login
  
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