import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import AppLayout from "./AppLayout";
import Homepage from "./pages/homepage/Homepage";
import Aboutpage from "./pages/aboutpage/Aboutpage";
import PageNotFound from "./pages/404page/PageNotFound";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />}></Route>
            <Route path="/play" element={<Homepage />}></Route>
            <Route path="/notes" element={<Homepage />}></Route>
            <Route path="/contact" element={<Homepage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
