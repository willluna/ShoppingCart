import { useState } from "react";
import { Container, Grid, InputBase, Typography } from "@mui/material";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

const products = [
  {
    nombre: "Manzanas",
    costByGram: 0.05,
    imageUrl: "/images/manzanas.jpeg",
  },
  {
    nombre: "Fresas",
    costByGram: 0.08,
    imageUrl: "/images/fresas.jpeg",
  },
  {
    nombre: "Uvas",
    costByGram: 0.06,
    imageUrl: "/images/uvas.jpg",
  },
  {
    nombre: "Naranjas",
    costByGram: 0.04,
    imageUrl: "/images/naranjas.jpeg",
  },
  {
    nombre: "Plátanos",
    costByGram: 0.03,
    imageUrl: "/images/bananos.jpeg",
  },
];

const App = () => {
  const [productQuantities, setProductQuantities] = useState(
    products.map(() => 0)
  );

  const handleIncrement = (index) => {
    const newQuantities = [...productQuantities];
    newQuantities[index]++;
    setProductQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...productQuantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setProductQuantities(newQuantities);
  };

  const calculateTotalCost = () => {
    const totalCost = products.reduce((acc, product, index) => {
      return acc + productQuantities[index] * product.costByGram;
    }, 0);
    return totalCost.toFixed(2);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" alignContent="center">
          <Navbar />
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <ProductList
          products={products}
          productQuantities={productQuantities}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </Grid>

      <Grid item xs={6}>
        <Container
          sx={{
            marginTop: 8,
            marginBottom: 4,
            border: 1,
            p: 2,
            height: "250px",
            boxShadow: 1,
            borderRadius: 8,
          }}
        >
          <Typography variant="h3" mt={2}>
            Product Cost Calculator
          </Typography>
          <Typography variant="body1">Quantity in grams:</Typography>
          <InputBase 
            autoComplete="string"
            type="text"
            value={`$${calculateTotalCost()}`}
            readOnly
            />
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
