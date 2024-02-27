import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateIdol, EditIdol, Home, Idols } from "../pages";
import { IdolProvider } from "../contexts/Idols";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <IdolProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idols" element={<Idols />} />
          <Route path="/idols/create" element={<CreateIdol />} />
          <Route path="/idols/:id" element={<EditIdol />} />
        </Routes>
      </IdolProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
