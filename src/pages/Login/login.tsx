import { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { URL_PATH } from '../../constants';

function Login() {

  const navigate = useNavigate();

  // Armazena o valor digitado pelo usuário
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Estados novos: loading para bloquear submissões concorrentes e error para feedback
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Verificação simples
  // Autenticação real com backend
  const fazerLogin = async (username: string, password: string) => {
    try {
      // limpa erro anterior ao iniciar nova tentativa
      setError(null);

      const response = await fetch(`${URL_PATH}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario: username, senha: password }),
      });

      if (!response.ok) {
        // registra e exibe mensagem amigável
        const text = await response.text().catch(() => '');
        alert(`Usuário ou senha incorretos ${text}`);
        setError("Usuário ou senha incorretos");
        return false;
      }

      const data = await response.json();
      alert(`Resposta do servidor: ${data}`,);

      if (data.token) {
        // guarda o token
        localStorage.setItem("token", data.token);

        // redireciona
        navigate("/dashboard");
        return true;
      } else {
        alert("Token não encontrado na resposta");
        setError("Resposta inválida do servidor");
        return false;
      }
    } catch (error) {
      alert(`Erro na requisição: ${error}`);
      setError("Erro na comunicação com o servidor");
      return false;
    }
  };

  // Lida com a ação de login, após o envio do formulário
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // impede reload da página
    setError(null);

    // normaliza e validação simples de email
    const email = username.trim();


    if (!password) {
      setError("Digite a senha!");
      return;
    }

    // evita múltiplos envios
    if (loading) return;
    setLoading(true);
    try {
      await fazerLogin(email, password);
    } finally {
      setLoading(false);
    }
  }

  // verifica token existente e redireciona se presente
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);


  // se não existir, permanece na página de login
  return (
    // criei uma div body para não afetar o estilo das outras páginas
    <div className="body">
      <div className="container-login">
        <h1>SmartLight</h1>
        <form noValidate onSubmit={handleLogin}>
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            onChange={(e) => setUsername(e.target.value)} // atualiza o valor digitado
            value={username} required />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password} required />

          {/* Exibe erro amigável para o usuário */}
          {error && <div className="error" role="alert">{error}</div>}

          {/* Botão desabilitado durante loading para evitar múltiplos envios */}
          <button type="submit" disabled={loading} aria-busy={loading} className='botao-login'>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;