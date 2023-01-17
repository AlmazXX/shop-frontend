import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
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
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;