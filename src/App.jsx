import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import AppLayout from "../AppLayout";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={""}></Route>
            <Route path="/about" element={""}></Route>
            <Route path="/play" element={""}></Route>
            <Route path="/notes" element={""}></Route>
            <Route path="/contact" element={""}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
