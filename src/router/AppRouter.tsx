import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateIdol, Home, Idols } from "../pages";
import { IdolProvider } from "../contexts/Idols";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <IdolProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idols" element={<Idols />} />
          <Route path="/idols/create" element={<CreateIdol />} />
        </Routes>
      </IdolProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
