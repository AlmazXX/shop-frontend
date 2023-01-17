import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import NewProduct from "./features/products/NewProduct";
import Products from "./features/products/Products";

function App() {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/products/new" element={<NewProduct />}></Route>
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;