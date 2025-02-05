import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ProductMutation } from "../../../types";

interface Props {
  onSubmit: (mutation: ProductMutation) => void;
}

const ProductForm: FC<Props> = ({ onSubmit }) => {
  const [state, setState] = useState<ProductMutation>({
    title: "",
    price: "",
    description: "",
  });

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(state);
  };

  const inputChangeHander = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form autoComplete="off" onSubmit={submitFormHandler}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="title"
            label="Title"
            value={state.title}
            onChange={inputChangeHander}
            name="title"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="price"
            label="Price"
            value={state.price}
            onChange={inputChangeHander}
            name="price"
          />
        </Grid>
        <Grid item xs>
          <TextField
            multiline
            rows={3}
            id="description"
            label="Description"
            value={state.description}
            onChange={inputChangeHander}
            name="description"
          />
        </Grid>
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;