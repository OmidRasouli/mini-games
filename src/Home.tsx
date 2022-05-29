import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Menu } from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import "./Home.scss";
import HelpPage from "./pages/help";
import PlayGame from "./pages/playground";
import Quit from "./pages/quit";
import ScoreBoardPage from "./pages/score-board";

function HomePage() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Routes>
          <Route path="/playground/:game" element={<PlayGame />} />
        </Routes>
        <Routes>
          <Route path="/score-board/:game" element={<ScoreBoardPage />} />
        </Routes>
        <Routes>
          <Route path="/help" element={<HelpPage />} />
        </Routes>
        <Routes>
          <Route path="/quit" element={<Quit />} />
        </Routes>
      </div>
    </>
  );
}

export default HomePage;
