// Importa componentes da MUI, hooks do React e funções auxiliares
import {Button, TextField, Typography, Box, Paper,} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../auth";

function Login() {

   // Estado para armazenar os dados do formulário
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  // Hook para navegação após login
  const navigate = useNavigate();

  // Função que trata o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      // Envia os dados de login para a Fake Store API
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      // Salva o token no localStorage
      setToken(response.data.token);

      // Redireciona para a página de produtos
      navigate("/products");
    } catch {

      // Caso o login falhe, mostra um alerta
      alert("Login failed");
    }
  };

  return (
   
    //Estilização da box de login
  <Box
  sx={{
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "#eeeeee", // fundo claro e moderno
    padding: 2,
    flexDirection: "column",
  }}
>

  <Typography
    variant="h3"
    component="h1"
    sx={{ mb: 1, fontWeight: 700, color: "#000000" }}
  >
    JLI Hub
  </Typography>

  <Paper
    elevation={3}
    sx={{
      padding: 4,
      width: "100%",
      maxWidth: 400,
      bgcolor: "#fff", // branco para contraste
      color: "#333333",   // texto escuro
    }}
  >
    <Typography variant="h4" gutterBottom align="center">
      Acessar Produtos
    </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Usuário"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        label="Senha"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: "#212121",
          color: "#fff",
          '&:hover': { bgcolor: "#000000" },
        }}
      >
        Acessar
      </Button>
    </form>
  </Paper>
</Box>


  );
}

export default Login;

/*Renderiza uma tela de login responsiva e centralizada e ao clicar em Acessar, 
envia os dados para a Fake Store API para autenticaçãoSe o login for bem-sucedido, 
salva o token no localStorage e redireciona o usuário para a 
página de produtos (/products)Se o login falhar, mostra um alerta simples 
com “Login failed”.*/
