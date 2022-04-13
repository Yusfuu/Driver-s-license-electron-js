import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Final from "./pages/Final";
import { Quiz } from "./pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC } from "react";
import { Home } from "./pages/Home";
const App: FC = (): JSX.Element => {
  return (
    <Routes >
      <Route path="/" element={<Home />}>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="submit" element={<Final />} />
      </Route>
    </Routes>
  );
};

export default App;
