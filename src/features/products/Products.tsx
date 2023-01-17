import { Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductItem from "./components/ProductItem";
import { selectProducts } from "./productsSlice";
import { fetchProducts } from "./productsThunk";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/products/new">
            Add product
          </Button>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Products;