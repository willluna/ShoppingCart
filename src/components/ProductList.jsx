import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import PropTypes from "prop-types";

const ProductList = ({
  products,
  productQuantities,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Box sx={{ marginTop: 8, height: "100%", width: "100%" }}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} md={6} lg={4} key={product.nombre}>
            <Box
              sx={{
                border: 1,
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: 1,
                borderRadius: 8,
                textAlign: "center",
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.nombre}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "150px",
                }}
              />
              <Typography variant="h6" component="div" textAlign="center">
                {product.nombre}
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={`Costo por gramo: $${product.costByGram.toFixed(
                      2
                    )}`}
                    textAlign="center"
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onIncrement(index)}
                  >
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Button>
                  <span>{productQuantities[index]}</span>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onDecrement(index)}
                  >
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  productQuantities: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default ProductList;
