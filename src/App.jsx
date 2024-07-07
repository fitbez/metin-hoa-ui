import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BuildingForm from "./components/BuildingForm";
import BuildingDetail from "./components/BuildingDetail";
import UserDetail from "./components/UserDetail";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/building/new" element={<BuildingForm />} />
        <Route path="/building/:id" element={<BuildingDetail />} />
        <Route path="/user/:building/:id" element={<UserDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
