import { Card, CardMedia, CardContent, Typography } from "@mui/material";

// Interface que define os dados esperados do produto
interface Props {
  product: {
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

function ProductCard({ product }: Props) {
  return (

     // Card principal que organiza o conteúdo em coluna, largura limitada e centralizado
     <Card sx={{ height: "100%", 
                 display: "flex", 
                 flexDirection: "column", 
                 width: "100%",
                 maxWidth: 360, 
                 margin: "0 auto", 
              }}
            >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: "contain",
          bgcolor: "#f9f9f9", // fundo leve para destacar imagem
          p: 2, // um pouco de espaço interno
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" noWrap>
          {product.title}
        </Typography>
        <Typography color="text.secondary" noWrap>
          ${product.price}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }} noWrap>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
