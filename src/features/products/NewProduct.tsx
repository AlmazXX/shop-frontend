import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { ProductMutation } from "../../types";
import ProductForm from "./components/ProductForm";
import { createProduct } from "./productsThunk";

const NewProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFormSubmit = async (productMutation: ProductMutation) => {
    await dispatch(createProduct(productMutation));
    navigate('/')
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">New product</Typography>
      </Grid>
      <Grid item>
        <ProductForm onSubmit={onFormSubmit} />
      </Grid>
    </Grid>
  );
};

export default NewProduct;