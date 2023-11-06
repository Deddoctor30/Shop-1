import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import Cases from "./pages/Cases/Cases";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import './styles/_global.scss';

function App() {
  return (
    <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="partners" element={<Partners />} />
            <Route path="cases" element={<Cases />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
