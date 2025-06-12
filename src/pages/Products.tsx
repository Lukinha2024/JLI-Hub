import { useEffect, useState } from "react";
import { Grid,Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { removeToken } from "../auth";
import ProductCard from "../components/ProductCard";

// Define a interface para o formato dos produtos
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function Products() {

   // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState<Product[]>([]);

   // Hook para navegação entre rotas
  const navigate = useNavigate();

  // useEffect para carregar os produtos da API ao montar o componente
  useEffect(() => {

    // Faz requisição GET para "/products" e armazena os dados no estado
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  // Função para logout: remove token e redireciona para a tela inicial
  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (

    //Estilização da página
   <Container maxWidth={false} sx={{ px: 0, bgcolor:"#eeeeee", pt: 4}}>
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    mb={2}
    px={2} 
  >
    <Typography variant="h4"
    sx={{fontWeight: 400, color: "#000000" }}
    >
      Produtos
      </Typography>

    <Button variant="contained"
  onClick={handleLogout}
  sx={{
    backgroundColor: "#000000",
    color: "#ffffff",
    '&:hover': {
      backgroundColor: "#212121",
    },
  }}

>
      Logout
    </Button>
  </Box>

  <Grid container spacing={3} mt={2}>
  {products.map((product) => ( 
    <Grid item xs={12} md={4} key={product.id}> 
      <ProductCard product={product} />
    </Grid>
  ))}
</Grid>
</Container>
  );
}

export default Products;

/* O componente busca produtos da API na montagem com useEffect
Armazena os produtos no estado local products
Exibe a lista em um grid responsivo usando Material UI
Possui um botão Logout que remove o token de autenticação e volta para a tela inicial
Usa o componente ProductCard para exibir cada produto.*/
