import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./layout/index"
import Parcours from "./layout/parcours";
import Projet from "./layout/projet";
import Layout from "./layout/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="*" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;