import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import AppLayout from "./AppLayout";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Homepage />}></Route>
            <Route path="/play" element={<Homepage />}></Route>
            <Route path="/notes" element={<Homepage />}></Route>
            <Route path="/contact" element={<Homepage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
