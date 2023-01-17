import { Grid, Typography } from "@mui/material";
import ProductForm from "./components/ProductForm";

const NewProduct = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">New product</Typography>
      </Grid>
      <Grid item>
        <ProductForm />
      </Grid>
    </Grid>
  );
};

export default NewProduct;