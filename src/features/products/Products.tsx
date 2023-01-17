import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
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
    </Grid>
  );
};

export default Products;