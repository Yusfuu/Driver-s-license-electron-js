<<<<<<< HEAD
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Final from "./pages/Final";
import { Quiz } from "./pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC } from "react";
import { Home } from "./pages/Home";
const App: FC = (): JSX.Element => {
  return (
    <Routes location={"/"}>
      <Route path="/" element={<Home />}>
        <Route path="quiz" element={<Quiz />} />
        <Route path="submit" element={<Final />} />
      </Route>
    </Routes>
=======
import Login from './pages/Login';
import Dashboard, { Home } from './pages/Dashboard';
import Final from './pages/Final';
import { Routes, Route, useLocation } from 'react-router-dom';
const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Routes location={pathname.replace('index', '')}>
        <Route path='/' element={<Dashboard />}>
          <Route path='home' element={<Home />} />
          <Route path='forms' element={<h1>Forms</h1>} />
        </Route>
      </Routes>

      {/* <Final /> */}
    </>
>>>>>>> ec48b73c081763a46a9966811aa83b85307adef7
  );
};

export default App;
