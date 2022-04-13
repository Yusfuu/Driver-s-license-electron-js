import Login from "./pages/Login";
import Dashboard, { Home } from "./pages/Dashboard";
import Final from "./pages/Final";
import { Routes, Route, useLocation } from "react-router-dom";
import { Quiz } from "./pages/Quiz";
import { Landing } from "./pages/Landing";

const App = () => {
  const { pathname } = useLocation();

  const path = pathname.replace("/index", "") || "/";

  return (
    <>
      <Routes location={path}>
        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="forms" element={<Quiz />} />
        </Route>
        <Route path="/admin" element={<Landing />}>
          <Route path="quiz" element={<Quiz />} />
          <Route path="submit" element={<Final />} />
        </Route>
      </Routes>
      {/* <Final /> */}
    </>
  );
};

export default App;
