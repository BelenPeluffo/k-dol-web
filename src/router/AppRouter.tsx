import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateIdol, Home, Idols } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idols" element={<Idols />} />
        <Route path="/idols/create" element={<CreateIdol />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
